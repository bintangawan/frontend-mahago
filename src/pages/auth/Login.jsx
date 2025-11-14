import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Mohon lengkapi semua field");
      return;
    }

    setIsSubmitting(true);

    // Simulasi login
    setTimeout(() => {
      alert("Login berhasil! Selamat datang 🎉");
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8 mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Selamat Datang!
          </h1>
          <p className="text-gray-600">Masuk ke akun MahaGo Anda</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8">
          <div className="space-y-5">
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
                  placeholder="Masukkan password"
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

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Lupa password?
              </a>
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
                  Masuk...
                </span>
              ) : (
                "Masuk"
              )}
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-linear-to-br from-green-50 via-white to-green-50 text-gray-500">
              atau
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-2xl py-3 hover:bg-gray-50 hover:border-gray-300 transition-all">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="font-medium text-gray-700">
              Masuk dengan Google
            </span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          MahaGo © 2024. Layanan ojek online kampus terpercaya
        </p>
      </div>
    </div>
  );
}
