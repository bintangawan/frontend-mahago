import { Link, useLocation } from "react-router-dom";
import { Home, Star, Gift, Phone, User, LogOut } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // ✅ Daftar route auth yang tidak menampilkan navigasi
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const navItems = [
    { name: "Beranda", path: "/", icon: Home },
    { name: "Layanan", path: "/layanan", icon: Star },
    { name: "Promo", path: "/promo", icon: Gift },
    { name: "Faq", path: "/faq", icon: Phone },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setIsDesktopDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Tambahkan logic logout di sini (clear token, redirect, etc)
    console.log("Logging out...");
    // Contoh: localStorage.removeItem('token');
    // navigate('/login');
  };

  // ✅ Jika halaman adalah login/register, tampilkan header minimal saja
  if (isAuthPage) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-500 shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-center py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/MahaGo Logo.svg"
              alt="MahaGo Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold text-green-700">MahaGo</h1>
          </div>
        </nav>
      </header>
    );
  }

  // ✅ Versi lengkap Navbar untuk halaman biasa
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

          {/* Profile Desktop Dropdown */}
          <div className="relative" ref={desktopDropdownRef}>
            <button
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/ojek.svg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
              />
            </button>

            {/* Dropdown Menu Desktop */}
            {isDesktopDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-200 overflow-hidden">
                <Link
                  to="/detail-profile"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors"
                  onClick={() => setIsDesktopDropdownOpen(false)}
                >
                  <User className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Detail Profile
                  </span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsDesktopDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors border-t border-gray-100"
                >
                  <LogOut className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-red-600">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* 📱 Mobile Header dengan Profile */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-green-500 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/images/MahaGo Logo.svg"
              alt="MahaGo Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-lg font-bold text-green-700">MahaGo</h1>
          </div>

          {/* Profile Mobile Dropdown */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/ojek.svg"
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-green-500"
              />
            </button>

            {/* Dropdown Menu Mobile */}
            {isMobileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-green-200 overflow-hidden">
                <Link
                  to="/detail-profile"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors"
                  onClick={() => setIsMobileDropdownOpen(false)}
                >
                  <User className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Detail Profile
                  </span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors border-t border-gray-100"
                >
                  <LogOut className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 📱 Bottom Navbar (Mobile & Tablet) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 pb-2 px-4">
        <div className="relative bg-linear-to-r from-green-500 to-green-600 rounded-3xl shadow-2xl shadow-green-500/40 backdrop-blur-xl border border-green-400/30">
          <div className="absolute inset-0 bg-linear-to-t from-green-400/20 to-transparent rounded-3xl"></div>

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
