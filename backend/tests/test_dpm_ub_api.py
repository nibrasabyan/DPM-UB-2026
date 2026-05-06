"""DPM UB 2026 backend API tests."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Use frontend's REACT_APP_BACKEND_URL (public ingress) for testing
load_dotenv(Path(__file__).parent.parent.parent / "frontend" / ".env")
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_greeting(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "DPM UB" in data["message"]


# ---------- Aspirasi CRUD ----------
class TestAspirasi:
    valid_payload = {
        "nama": "TEST_Andi Pratama",
        "nim": "215150400111000",
        "fakultas": "FILKOM",
        "kategori": "Akademik",
        "judul": "TEST_Permintaan stop kontak",
        "isi": "Mohon penambahan stop kontak di perpustakaan pusat untuk mendukung mahasiswa.",
    }

    def test_create_aspirasi_success(self, client):
        r = client.post(f"{API}/aspirasi", json=self.valid_payload)
        assert r.status_code == 201, r.text
        data = r.json()
        # Required response fields
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["status"] == "pending"
        assert "created_at" in data
        # Echo fields
        assert data["nama"] == self.valid_payload["nama"]
        assert data["nim"] == self.valid_payload["nim"]
        assert data["fakultas"] == self.valid_payload["fakultas"]
        assert data["kategori"] == "Akademik"
        assert data["judul"] == self.valid_payload["judul"]
        assert data["isi"] == self.valid_payload["isi"]
        # Stash for later tests
        TestAspirasi.created_id = data["id"]

    def test_create_persisted_in_list(self, client):
        # Verify created aspirasi appears in list
        r = client.get(f"{API}/aspirasi")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        # No _id leak
        for row in rows:
            assert "_id" not in row
        ids = [row["id"] for row in rows]
        assert getattr(TestAspirasi, "created_id", None) in ids

    def test_list_sorted_desc(self, client):
        # Create another aspirasi and verify newest is first
        p2 = dict(self.valid_payload, judul="TEST_second item", isi="Aspirasi kedua untuk pengujian sortir berdasarkan tanggal.")
        r = client.post(f"{API}/aspirasi", json=p2)
        assert r.status_code == 201
        new_id = r.json()["id"]
        r = client.get(f"{API}/aspirasi")
        assert r.status_code == 200
        rows = r.json()
        assert len(rows) >= 2
        # newest should be at index 0
        assert rows[0]["id"] == new_id

    def test_invalid_kategori_422(self, client):
        bad = dict(self.valid_payload, kategori="Random")
        r = client.post(f"{API}/aspirasi", json=bad)
        assert r.status_code == 422

    def test_short_isi_422(self, client):
        bad = dict(self.valid_payload, isi="short")
        r = client.post(f"{API}/aspirasi", json=bad)
        assert r.status_code == 422

    def test_missing_field_422(self, client):
        bad = {k: v for k, v in self.valid_payload.items() if k != "nama"}
        r = client.post(f"{API}/aspirasi", json=bad)
        assert r.status_code == 422

    def test_stats_endpoint(self, client):
        r = client.get(f"{API}/aspirasi/stats")
        assert r.status_code == 200
        data = r.json()
        for k in ("total", "pending", "diproses", "selesai"):
            assert k in data
            assert isinstance(data[k], int)
        assert data["total"] >= 2  # we created 2
        assert data["pending"] >= 2

    def test_limit_out_of_range(self, client):
        r = client.get(f"{API}/aspirasi", params={"limit": 1000})
        assert r.status_code == 400

    def test_limit_zero(self, client):
        r = client.get(f"{API}/aspirasi", params={"limit": 0})
        assert r.status_code == 400
