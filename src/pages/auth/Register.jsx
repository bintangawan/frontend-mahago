import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Mohon lengkapi semua field");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password minimal 6 karakter");
      return;
    }

    setIsSubmitting(true);

    // Simulasi register
    setTimeout(() => {
      alert("Registrasi berhasil! Silakan login 🎉");
      setIsSubmitting(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8 mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daftar Akun</h1>
          <p className="text-gray-600">Bergabung dengan MahaGo sekarang!</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8">
          <div className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <User className="h-4 w-4 text-green-600" />
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Mail className="h-4 w-4 text-green-600" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Lock className="h-4 w-4 text-green-600" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 6 karakter"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Lock className="h-4 w-4 text-green-600" />
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Ulangi password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Mendaftar...
                </span>
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Dengan mendaftar, Anda menyetujui{" "}
          <a href="#" className="text-green-600 hover:underline">
            Syarat & Ketentuan
          </a>{" "}
          kami
        </p>
      </div>
    </div>
  );
}
