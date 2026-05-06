from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="DPM UB 2026 API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


KategoriType = Literal["Akademik", "Fasilitas", "Kebijakan", "Kesejahteraan", "Lainnya"]


class AspirasiCreate(BaseModel):
    nama: str = Field(..., min_length=2, max_length=120)
    nim: str = Field(..., min_length=3, max_length=30)
    fakultas: str = Field(..., min_length=2, max_length=120)
    kategori: KategoriType
    judul: str = Field(..., min_length=3, max_length=160)
    isi: str = Field(..., min_length=10, max_length=4000)


class Aspirasi(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nama: str
    nim: str
    fakultas: str
    kategori: KategoriType
    judul: str
    isi: str
    status: Literal["pending", "diproses", "selesai"] = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------

@api_router.get("/")
async def root():
    return {"message": "DPM UB 2026 — Parlemen Pilar Karsa API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


@api_router.post("/aspirasi", response_model=Aspirasi, status_code=201)
async def create_aspirasi(payload: AspirasiCreate):
    obj = Aspirasi(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.aspirasi.insert_one(doc)
    return obj


@api_router.get("/aspirasi", response_model=List[Aspirasi])
async def list_aspirasi(limit: int = 50):
    if limit < 1 or limit > 500:
        raise HTTPException(status_code=400, detail="limit must be between 1 and 500")
    rows = await db.aspirasi.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.get("/aspirasi/stats")
async def aspirasi_stats():
    total = await db.aspirasi.count_documents({})
    pending = await db.aspirasi.count_documents({"status": "pending"})
    diproses = await db.aspirasi.count_documents({"status": "diproses"})
    selesai = await db.aspirasi.count_documents({"status": "selesai"})
    return {
        "total": total,
        "pending": pending,
        "diproses": diproses,
        "selesai": selesai,
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
