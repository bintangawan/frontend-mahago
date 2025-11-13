import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Navigation,
  X,
  Bike,
  Package,
  ChevronDown,
} from "lucide-react";

export default function Order() {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState(""); // ✅ tipe order
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!orderType || !pickup || !destination) {
      alert("Mohon isi tipe order, titik penjemputan, dan tujuan");
      return;
    }

    setIsSubmitting(true);

    // Simulasi submit order
    setTimeout(() => {
      alert(`Pesanan ${orderType} berhasil dibuat! 🎉`);
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-linear-to-r from-green-500 to-green-600 rounded-t-3xl p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Bike className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">MahaGo</h2>
              <p className="text-green-100 text-sm">
                Driver kami siap memenuhi kebutuhan Anda!
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* 🛵 Tipe Order */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Package className="h-4 w-4 text-green-600" />
              Tipe Orderan
            </label>
            <div className="relative">
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors appearance-none bg-white text-gray-700 font-medium cursor-pointer hover:border-green-300"
              >
                <option value="" className="text-gray-400">
                  Pilih tipe orderan
                </option>
                <option value="Ojek" className="py-2">
                  🏍️ Ojek
                </option>
                <option value="Makanan" className="py-2">
                  🍔 Makanan
                </option>
                <option value="Benda (Laprak, Laundry)" className="py-2">
                  📦 Benda (Laprak, Laundry)
                </option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-600 pointer-events-none" />
            </div>
          </div>

          {/* Titik Penjemputan */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <MapPin className="h-4 w-4 text-green-600" />
              Titik Penjemputan
            </label>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Masukkan lokasi penjemputan"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Destinasi */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Navigation className="h-4 w-4 text-green-600" />
              Tujuan
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Masukkan lokasi tujuan"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Harga */}
          <div className="bg-linear-to-r from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Harga Perjalanan
              </span>
              <span className="text-2xl font-bold text-green-600">Rp5.000</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Tarif flat untuk semua tujuan
            </p>
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
                Memproses...
              </span>
            ) : (
              "Pesan Sekarang"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
