import { Link } from "react-router-dom";
import { Bike, Utensils, Package, Navigation } from "lucide-react";

export default function Layanan() {
  const services = [
    {
      id: 1,
      icon: Bike,
      title: "MahaGo Ride",
      subtitle: "Ojek Online Kampus",
      description:
        "Layanan transportasi ojek online yang cepat, aman, dan nyaman untuk mengantarkan Anda ke berbagai destinasi di sekitar kampus. Dengan driver berpengalaman dan profesional, perjalanan Anda akan lebih menyenangkan.",
      features: [
        "Driver terverifikasi dan ramah",
        "Tarif flat Rp5.000",
        "Layanan 24/7",
        "Proses pemesanan mudah",
      ],
      color: "from-green-500 to-green-600",
      bgLight: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      id: 2,
      icon: Utensils,
      title: "MahaGo Food",
      subtitle: "Pengantar Makanan",
      description:
        "Pesan makanan favorit Anda dari berbagai restoran dan warung di sekitar kampus. Kami siap mengantar pesanan Anda dengan cepat dan tetap hangat hingga tiba di tangan Anda.",
      features: [
        "Banyak pilihan kuliner",
        "Pengiriman cepat dan aman",
        "Makanan tetap fresh",
        "Real-time tracking",
      ],
      color: "from-orange-500 to-orange-600",
      bgLight: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      id: 3,
      icon: Package,
      title: "MahaGo Express",
      subtitle: "Pengantar & Penjemput Barang",
      description:
        "Butuh kirim atau jemput laporan praktikum, laundry, paket, atau barang lainnya? Serahkan pada kami! Layanan pengiriman barang yang praktis dan terpercaya untuk memenuhi kebutuhan sehari-hari Anda.",
      features: [
        "Laprak & dokumen",
        "Laundry pick-up & delivery",
        "Paket & barang lainnya",
        "Barang dijamin aman",
      ],
      color: "from-blue-500 to-blue-600",
      bgLight: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      id: 4,
      icon: Navigation,
      title: "MahaGo Becak",
      subtitle: "Becak Tradisional Modern",
      description:
        "Rasakan pengalaman unik berkeliling kampus dengan becak! Pilihan transportasi tradisional yang ramah lingkungan, cocok untuk perjalanan santai atau mengangkut barang bawaan yang banyak.",
      features: [
        "Ramah lingkungan",
        "Kapasitas lebih besar",
        "Cocok bawa barang banyak",
        "Pengalaman unik",
      ],
      color: "from-purple-500 to-purple-600",
      bgLight: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 pt-20 md:pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Layanan MahaGo
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto">
            Berbagai layanan transportasi dan pengiriman untuk memudahkan
            aktivitas kampus Anda
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div
                  className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`p-4 bg-white/20 backdrop-blur-sm rounded-2xl flex-shrink-0`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-5">
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-3 flex items-center gap-2">
                      <div
                        className={`w-1 h-4 ${service.color} bg-gradient-to-b rounded-full`}
                      ></div>
                      Keunggulan:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 text-sm bg-gradient-to-r ${service.bgLight} ${service.borderColor} border rounded-xl px-3 py-2`}
                        >
                          <div
                            className={`w-1.5 h-1.5 ${service.color} bg-gradient-to-br rounded-full flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/create-order"
                    className={`block w-full bg-gradient-to-r ${service.color} text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-center`}
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-10 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 md:p-8 text-white text-center shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Semua Layanan dengan Tarif Flat!
          </h3>
          <p className="text-green-100 mb-4 text-sm md:text-base">
            Nikmati semua layanan MahaGo dengan harga yang sama untuk semua
            tujuan
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
            <span className="text-3xl md:text-4xl font-bold">Rp5.000</span>
            <span className="text-green-100 text-sm">/ perjalanan</span>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-green-200 transition-colors">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Cepat & Praktis</h4>
            <p className="text-sm text-gray-600">
              Proses pemesanan mudah dan driver segera merespons
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-green-200 transition-colors">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Aman & Terpercaya</h4>
            <p className="text-sm text-gray-600">
              Driver terverifikasi dan barang Anda dijamin aman
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:border-green-200 transition-colors">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Harga Terjangkau</h4>
            <p className="text-sm text-gray-600">
              Tarif flat untuk mahasiswa dengan budget terbatas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
