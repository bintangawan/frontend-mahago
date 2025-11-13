import { Link, useLocation } from "react-router-dom";
import { Home, Star, Gift, Phone } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Beranda", path: "/", icon: Home },
    { name: "Fitur", path: "/fitur", icon: Star },
    { name: "Promo", path: "/promo", icon: Gift },
    { name: "Kontak", path: "/kontak", icon: Phone },
  ];

  return (
    <>
      {/* 🌐 Desktop Navbar */}
      <header className="hidden md:block fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-500">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/MahaGo Logo.svg"
              alt="MahaGo Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold text-green-700">MahaGo</h1>
          </div>

          <ul className="flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition ${
                    location.pathname === item.path
                      ? "text-green-600 font-semibold"
                      : "hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* 📱 Bottom Navbar (Mobile & Tablet) - Curved Modern Design */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 pb-2 px-4">
        <div className="relative bg-linear-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl shadow-green-500/40 backdrop-blur-xl border border-green-400/30">
          {/* Decorative glow effect */}
          <div className="absolute inset-0 bg-lineaer-to-t from-green-400/20 to-transparent rounded-3xl"></div>

          <div className="relative flex justify-around items-center py-3 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isActive
                      ? "text-white scale-110"
                      : "text-green-100 hover:text-white hover:scale-105"
                  }`}
                >
                  <div
                    className={`p-2 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/30 shadow-lg shadow-white/50"
                        : "bg-transparent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
