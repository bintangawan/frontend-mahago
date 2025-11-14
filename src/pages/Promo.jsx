import { Link } from "react-router-dom";
import {
  Bike,
  Utensils,
  Package,
  Navigation,
  Tag,
  Gift,
  Clock,
  Star,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Promo() {
  const featuredPromo = {
    id: "featured",
    title: "Promo Spesial Akhir Tahun!",
    subtitle: "Diskon 50% untuk 10 perjalanan pertama",
    description:
      "Khusus pengguna baru! Nikmati diskon 50% untuk 10 perjalanan pertama Anda di semua layanan MahaGo.",
    discount: "50%",
    price: "Rp2.500",
    normalPrice: "Rp5.000",
    code: "MAHAGO50",
    validity: "Berlaku hingga 31 Desember 2025",
    terms: [
      "Berlaku untuk pengguna baru",
      "Maksimal 10 transaksi",
      "Tidak dapat digabung dengan promo lain",
      "Berlaku untuk semua layanan",
    ],
    color: "from-green-500 to-green-600",
    bgLight: "from-green-50 to-green-100",
  };

  const promos = [
    {
      id: 1,
      icon: Bike,
      service: "MahaGo Ride",
      title: "Gratis Ongkir Senin!",
      description:
        "Setiap hari Senin, nikmati perjalanan gratis untuk 3 kali pemesanan pertama",
      badge: "SENIN GRATIS",
      discount: "100%",
      color: "from-green-500 to-green-600",
      bgLight: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      code: "SENINRIDE",
      validity: "Setiap hari Senin",
    },
    {
      id: 2,
      icon: Utensils,
      service: "MahaGo Food",
      title: "Makan Hemat!",
      description: "Diskon 30% untuk pemesanan makanan di atas Rp30.000",
      badge: "HEMAT 30%",
      discount: "30%",
      color: "from-orange-500 to-orange-600",
      bgLight: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      code: "FOOD30",
      validity: "Berlaku setiap hari",
    },
    {
      id: 3,
      icon: Package,
      service: "MahaGo Express",
      title: "Kirim Laprak Murah",
      description: "Khusus pengiriman laporan praktikum, cuma Rp3.000!",
      badge: "SUPER MURAH",
      discount: "40%",
      color: "from-blue-500 to-blue-600",
      bgLight: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      code: "LAPRAK3K",
      validity: "Berlaku hingga 31 Des 2025",
    },
    {
      id: 4,
      icon: Navigation,
      service: "MahaGo Becak",
      title: "Weekend Special",
      description: "Sabtu-Minggu nikmati perjalanan becak cuma Rp4.000",
      badge: "WEEKEND",
      discount: "20%",
      color: "from-purple-500 to-purple-600",
      bgLight: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      code: "BECAK4K",
      validity: "Sabtu & Minggu",
    },
    {
      id: 5,
      icon: Gift,
      service: "Semua Layanan",
      title: "Cashback Rp10.000",
      description: "Ajak 5 teman daftar, dapatkan cashback Rp10.000!",
      badge: "REFERRAL",
      discount: "Cashback",
      color: "from-pink-500 to-pink-600",
      bgLight: "from-pink-50 to-pink-100",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      code: "AJAKTEMAN",
      validity: "Berlaku selamanya",
    },
    {
      id: 6,
      icon: Star,
      service: "Semua Layanan",
      title: "Member Setia",
      description:
        "Sudah 20x transaksi? Gratis 1 perjalanan setiap 5 transaksi berikutnya!",
      badge: "LOYALTY",
      discount: "Free Ride",
      color: "from-yellow-500 to-yellow-600",
      bgLight: "from-yellow-50 to-yellow-100",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      code: "LOYAL20",
      validity: "Otomatis aktif",
    },
  ];

  const quickPromos = [
    {
      title: "Promo Midnight",
      time: "23:00 - 06:00",
      discount: "20%",
      icon: "🌙",
    },
    {
      title: "Flash Sale",
      time: "12:00 - 14:00",
      discount: "25%",
      icon: "⚡",
    },
    {
      title: "Happy Hour",
      time: "16:00 - 18:00",
      discount: "15%",
      icon: "☕",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 pt-20 md:pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">
              Promo Terbaru!
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Promo MahaGo
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto">
            Hemat lebih banyak dengan berbagai promo menarik dari MahaGo!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-8">
        {/* Featured Promo */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-white relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Left: Discount Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-xl">
                      <span className="text-4xl md:text-5xl font-bold text-green-600">
                        {featuredPromo.discount}
                      </span>
                      <span className="text-sm text-gray-600 font-semibold">
                        OFF
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 shadow-lg animate-bounce">
                      <Gift className="h-5 w-5 text-yellow-800" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                    <Tag className="h-3 w-3 text-white" />
                    <span className="text-white text-xs font-semibold">
                      PROMO SPESIAL
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {featuredPromo.title}
                  </h2>
                  <p className="text-lg text-green-100 mb-4">
                    {featuredPromo.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-2xl font-bold text-white">
                        {featuredPromo.price}
                      </span>
                      <span className="text-sm text-green-100 line-through ml-2">
                        {featuredPromo.normalPrice}
                      </span>
                    </div>
                    <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                      <span className="text-xs text-gray-600 font-medium">
                        Kode Promo:
                      </span>
                      <span className="text-lg font-bold text-green-600 ml-1">
                        {featuredPromo.code}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-green-100 text-sm mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPromo.validity}</span>
                  </div>
                  <Link
                    to="/create-order"
                    className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Gunakan Promo Ini
                  </Link>
                </div>
              </div>

              {/* Terms */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white font-semibold mb-2 text-sm">
                  Syarat & Ketentuan:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {featuredPromo.terms.map((term, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-green-100 text-xs"
                    >
                      <span className="text-white mt-0.5">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Time-based Promos */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            Promo Berdasarkan Waktu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickPromos.map((promo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-green-200 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{promo.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{promo.title}</h4>
                    <p className="text-xs text-gray-600">{promo.time}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl px-4 py-2 text-center">
                  <span className="text-2xl font-bold text-green-600">
                    {promo.discount}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">OFF</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Promos Grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Tag className="h-6 w-6 text-green-600" />
            Semua Promo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo) => {
              const Icon = promo.icon;
              return (
                <div
                  key={promo.id}
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Promo Header */}
                  <div
                    className={`bg-gradient-to-r ${promo.color} p-4 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>

                    <div className="relative flex items-center justify-between mb-2">
                      <div
                        className={`p-2.5 bg-white/20 backdrop-blur-sm rounded-xl`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-bold">{promo.badge}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-xs text-white/80 mb-1">
                        {promo.service}
                      </p>
                      <h4 className="text-lg font-bold">{promo.title}</h4>
                    </div>
                  </div>

                  {/* Promo Content */}
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {promo.description}
                    </p>

                    {/* Discount Badge */}
                    <div
                      className={`bg-gradient-to-r ${
                        promo.bgLight
                      } rounded-xl p-3 mb-4 text-center border-2 ${promo.color
                        .replace("from-", "border-")
                        .split(" ")[0]
                        .replace("-500", "-200")}`}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent">
                        {promo.discount}
                      </span>
                    </div>

                    {/* Promo Code */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-4 border border-dashed border-gray-300">
                      <p className="text-xs text-gray-600 mb-1 text-center">
                        Kode Promo:
                      </p>
                      <p className="font-mono font-bold text-center text-gray-800">
                        {promo.code}
                      </p>
                    </div>

                    {/* Validity */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-4">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{promo.validity}</span>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/create-order"
                      className={`block w-full bg-gradient-to-r ${promo.color} text-white font-semibold py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-center text-sm`}
                    >
                      Pakai Promo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-10 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 md:p-8 text-center shadow-xl">
          <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Pantau Terus Promo Terbaru!
          </h3>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto">
            Ikuti media sosial kami untuk mendapatkan update promo terbaru dan
            kode voucher eksklusif
          </p>
        </div>
      </div>
    </div>
  );
}
