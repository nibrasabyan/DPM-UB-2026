import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App relative min-h-screen">
      <BrowserRouter>
        <Background />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <NotFound
                  title="Halaman About"
                  message="Halaman About sedang dirancang. Profil lengkap kepengurusan dan struktur DPM UB 2026 akan segera tersedia."
                />
              }
            />
            <Route
              path="/legislasi"
              element={
                <NotFound
                  title="Halaman Legislasi"
                  message="Pusat dokumen, ketetapan, dan produk hukum DPM UB sedang disiapkan. Nantikan transparansi penuh dari Parlemen Pilar Karsa."
                />
              }
            />
            <Route
              path="/aspirasi"
              element={
                <NotFound
                  title="Portal Aspirasi"
                  message="Portal aspirasi mahasiswa sedang dalam pengembangan. Untuk sementara, gunakan tombol 'Suarakan Aspirasimu' di header untuk menyampaikan suara Anda."
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          theme="dark"
          position="top-center"
          richColors
          toastOptions={{
            style: {
              background: "rgba(10, 16, 29, 0.92)",
              border: "1px solid rgba(198, 140, 72, 0.3)",
              color: "#fff",
              backdropFilter: "blur(16px)",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
