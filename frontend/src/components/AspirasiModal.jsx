import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, Sparkles } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const KATEGORI = [
  "Akademik",
  "Fasilitas",
  "Kebijakan",
  "Kesejahteraan",
  "Lainnya",
];

const initial = {
  nama: "",
  nim: "",
  fakultas: "",
  kategori: "",
  judul: "",
  isi: "",
};

export default function AspirasiModal({ open, onOpenChange }) {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) =>
    setForm((p) => ({
      ...p,
      [k]: e?.target ? e.target.value : e,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.nama ||
      !form.nim ||
      !form.fakultas ||
      !form.kategori ||
      !form.judul ||
      !form.isi
    ) {
      toast.error("Mohon lengkapi seluruh kolom aspirasi.");
      return;
    }
    if (form.isi.trim().length < 10) {
      toast.error("Isi aspirasi minimal 10 karakter.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/aspirasi`, form);
      toast.success("Aspirasi berhasil dikirim!", {
        description:
          "Terima kasih. Suara Anda akan kami tindak lanjuti oleh DPM UB.",
      });
      setForm(initial);
      onOpenChange(false);
    } catch (err) {
      const msg =
        err?.response?.data?.detail || "Gagal mengirim aspirasi. Coba lagi.";
      toast.error(typeof msg === "string" ? msg : "Gagal mengirim aspirasi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl border-white/10 bg-[#070C16]/95 p-0 text-white shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        data-testid="aspirasi-modal"
      >
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

        <DialogHeader className="border-b border-white/[0.06] px-8 pt-8 pb-5">
          <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
            <Sparkles className="h-3 w-3" /> Form Aspirasi
          </div>
          <DialogTitle className="font-display text-3xl font-bold tracking-tight text-white">
            Suarakan Aspirasimu
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Setiap suara mahasiswa adalah pondasi parlemen. Sampaikan aspirasi
            Anda dengan jelas — kami akan menindaklanjuti dengan transparan.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 px-8 py-6 sm:grid-cols-2"
          data-testid="aspirasi-form"
        >
          <Field label="Nama Lengkap">
            <Input
              data-testid="aspirasi-input-nama"
              value={form.nama}
              onChange={update("nama")}
              placeholder="contoh: Andi Pratama"
              className="bg-white/[0.03] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-amber-400/40"
            />
          </Field>

          <Field label="NIM">
            <Input
              data-testid="aspirasi-input-nim"
              value={form.nim}
              onChange={update("nim")}
              placeholder="contoh: 215150400111000"
              className="bg-white/[0.03] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-amber-400/40"
            />
          </Field>

          <Field label="Fakultas">
            <Input
              data-testid="aspirasi-input-fakultas"
              value={form.fakultas}
              onChange={update("fakultas")}
              placeholder="contoh: FILKOM"
              className="bg-white/[0.03] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-amber-400/40"
            />
          </Field>

          <Field label="Kategori">
            <Select value={form.kategori} onValueChange={update("kategori")}>
              <SelectTrigger
                data-testid="aspirasi-input-kategori"
                className="bg-white/[0.03] border-white/10 text-white focus:ring-amber-400/40"
              >
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-[#0A101D] text-white">
                {KATEGORI.map((k) => (
                  <SelectItem
                    key={k}
                    value={k}
                    className="focus:bg-amber-500/10 focus:text-amber-200"
                  >
                    {k}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <div className="sm:col-span-2">
            <Field label="Judul Aspirasi">
              <Input
                data-testid="aspirasi-input-judul"
                value={form.judul}
                onChange={update("judul")}
                placeholder="Ringkas aspirasi dalam satu kalimat"
                className="bg-white/[0.03] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-amber-400/40"
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field label="Isi Aspirasi">
              <Textarea
                data-testid="aspirasi-input-isi"
                value={form.isi}
                onChange={update("isi")}
                rows={5}
                placeholder="Jelaskan aspirasi, harapan, atau permasalahan yang Anda hadapi..."
                className="bg-white/[0.03] border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-amber-400/40"
              />
            </Field>
          </div>

          <div className="sm:col-span-2 flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Aspirasi Anda dijamin terdistribusi ke pengurus terkait.
            </p>
            <button
              type="submit"
              disabled={loading}
              data-testid="aspirasi-submit-button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-700 px-7 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(229,184,105,0.7)] transition-all hover:scale-[1.03] disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {loading ? "Mengirim..." : "Kirim Aspirasi"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-[11px] uppercase tracking-[0.18em] text-amber-400/80">
        {label}
      </Label>
      {children}
    </div>
  );
}
