import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function CreateOrder() {
  const location = useLocation();

  // ✅ Sembunyikan tombol di halaman login & register
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) return null; // Tidak render tombol sama sekali di halaman auth

  return (
    <>
      {/* 🖥️ Desktop Version */}
      <Link
        to="/create-order"
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center justify-center w-16 h-16 bg-linear-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" />

        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
      </Link>

      {/* 📱 Mobile Version - Above Bottom Nav */}
      <Link
        to="/create-order"
        className="md:hidden fixed bottom-32 right-6 z-40 flex items-center justify-center w-14 h-14 bg-linear-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl shadow-green-500/50 active:scale-90 transition-all duration-300"
      >
        <Plus className="h-7 w-7" />

        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></span>
      </Link>
    </>
  );
}
