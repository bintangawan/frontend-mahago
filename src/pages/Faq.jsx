import { useState } from "react";
import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Code,
  Users,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          q: "Apa itu MahaGo?",
          a: "MahaGo adalah platform transportasi dan pengiriman online yang dirancang khusus untuk mahasiswa. Kami menyediakan berbagai layanan seperti ojek online, pesan-antar makanan, pengiriman barang, dan becak tradisional dengan tarif flat yang terjangkau.",
        },
        {
          q: "Berapa tarif layanan MahaGo?",
          a: "Semua layanan MahaGo menggunakan sistem tarif flat sebesar Rp5.000 per perjalanan untuk semua tujuan di area kampus. Tarif ini sangat terjangkau untuk mahasiswa dengan budget terbatas.",
        },
        {
          q: "Di mana saja area jangkauan MahaGo?",
          a: "Saat ini MahaGo beroperasi di area kampus dan sekitarnya. Kami terus memperluas jangkauan layanan untuk memberikan kemudahan akses ke lebih banyak lokasi.",
        },
        {
          q: "Apakah MahaGo aman digunakan?",
          a: "Ya, sangat aman! Semua driver MahaGo telah melalui proses verifikasi dan pelatihan. Kami juga memiliki sistem tracking real-time dan customer support yang siap membantu jika ada kendala.",
        },
      ],
    },
    {
      category: "Pemesanan",
      questions: [
        {
          q: "Bagaimana cara memesan layanan MahaGo?",
          a: "Anda dapat memesan melalui website atau aplikasi MahaGo. Cukup pilih jenis layanan, masukkan lokasi penjemputan dan tujuan, lalu konfirmasi pesanan. Driver akan segera merespons pesanan Anda.",
        },
        {
          q: "Apakah bisa memesan untuk orang lain?",
          a: "Tentu bisa! Anda dapat memesan untuk teman atau keluarga dengan memasukkan detail penerima saat melakukan pemesanan.",
        },
        {
          q: "Berapa lama waktu tunggu driver?",
          a: "Rata-rata waktu tunggu adalah 5-10 menit tergantung ketersediaan driver di lokasi Anda. Kami selalu berusaha memberikan layanan secepat mungkin.",
        },
        {
          q: "Apakah bisa membatalkan pesanan?",
          a: "Ya, Anda dapat membatalkan pesanan sebelum driver mengambil orderan. Namun, jika driver sudah dalam perjalanan menuju lokasi penjemputan, pembatalan mungkin dikenakan biaya.",
        },
      ],
    },
    {
      category: "Pembayaran",
      questions: [
        {
          q: "Metode pembayaran apa saja yang tersedia?",
          a: "Kami menerima pembayaran tunai, transfer bank, e-wallet (GoPay, OVO, Dana, ShopeePay), dan QRIS. Pilih metode yang paling nyaman untuk Anda.",
        },
        {
          q: "Apakah ada biaya tambahan?",
          a: "Tidak ada biaya tambahan! Tarif Rp5.000 sudah termasuk semua biaya. Namun, jika Anda menggunakan promo atau voucher, harga bisa lebih murah.",
        },
        {
          q: "Bagaimana cara menggunakan kode promo?",
          a: "Masukkan kode promo saat melakukan pemesanan di kolom 'Kode Promo'. Diskon akan otomatis diterapkan ke total pembayaran Anda.",
        },
      ],
    },
    {
      category: "Layanan Khusus",
      questions: [
        {
          q: "Apakah MahaGo Food bisa pesan dari mana saja?",
          a: "MahaGo Food dapat memesan dari berbagai restoran dan warung yang terdaftar di platform kami. Pilih merchant favorit Anda dan kami akan mengantarkan pesanan dengan cepat.",
        },
        {
          q: "Berapa kapasitas maksimal MahaGo Express?",
          a: "MahaGo Express dapat mengirim barang hingga 10 kg dengan dimensi maksimal 50x40x40 cm. Untuk barang yang lebih besar, silakan hubungi customer service kami.",
        },
        {
          q: "Apakah MahaGo Becak bisa untuk bawa barang banyak?",
          a: "Ya! MahaGo Becak cocok untuk membawa barang bawaan yang banyak seperti belanjaan atau laundry. Kapasitasnya lebih besar dibanding motor.",
        },
      ],
    },
    {
      category: "Keamanan & Privasi",
      questions: [
        {
          q: "Bagaimana MahaGo menjaga data pribadi saya?",
          a: "Kami sangat serius dalam menjaga privasi pengguna. Data pribadi Anda dienkripsi dan hanya digunakan untuk keperluan layanan. Kami tidak akan membagikan data Anda kepada pihak ketiga tanpa izin.",
        },
        {
          q: "Bagaimana jika ada masalah saat perjalanan?",
          a: "Jika terjadi masalah, segera hubungi customer service kami melalui WhatsApp atau tombol emergency di aplikasi. Tim kami siap membantu 24/7.",
        },
      ],
    },
  ];

  const handleWhatsAppClick = () => {
    const phone = "628388613541";
    const message = encodeURIComponent("Bang aku mau ngaduin tentang ...");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 pt-20 md:pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Pusat Bantuan & FAQ
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto">
            Ada pertanyaan? Kami siap membantu Anda!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-8">
        {/* Contact Card */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-3" />
              <h2 className="text-2xl font-bold mb-2">Butuh Bantuan?</h2>
              <p className="text-green-100 text-sm">
                Tim support kami siap membantu Anda 24/7
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl border-2 border-green-100">
                  <div className="p-2 bg-green-100 rounded-xl">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">
                      WhatsApp
                    </p>
                    <p className="text-xs text-gray-600">+62 838-8613-541</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">
                      Email
                    </p>
                    <p className="text-xs text-gray-600">support@mahago.id</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-2xl border-2 border-purple-100">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">
                      Lokasi
                    </p>
                    <p className="text-xs text-gray-600">Area Kampus</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Hubungi via WhatsApp
                <ExternalLink className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Klik untuk mengirim pesan: "Bang aku mau ngaduin tentang ..."
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="space-y-6">
            {faqs.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-100">
                  {category.questions.map((faq, qIndex) => {
                    const index = `${catIndex}-${qIndex}`;
                    const isOpen = openIndex === index;

                    return (
                      <div key={qIndex} className="transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-4 flex items-center justify-between gap-4 hover:bg-green-50 transition-colors text-left"
                        >
                          <span className="font-semibold text-gray-800 flex-1">
                            {faq.q}
                          </span>
                          <div
                            className={`flex-shrink-0 p-1 rounded-lg transition-all duration-300 ${
                              isOpen ? "bg-green-100" : "bg-gray-100"
                            }`}
                          >
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-green-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-600" />
                            )}
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-4 pt-2">
                            <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 md:p-8 text-white shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
            💡 Tips Menggunakan MahaGo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-2">✅ Pastikan lokasi akurat</p>
              <p className="text-sm text-blue-100">
                Berikan pin lokasi yang tepat agar driver mudah menemukan Anda
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-2">⏰ Pesan di waktu tepat</p>
              <p className="text-sm text-blue-100">
                Hindari jam sibuk untuk mendapat driver lebih cepat
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-2">🎫 Gunakan promo</p>
              <p className="text-sm text-blue-100">
                Jangan lupa cek halaman promo untuk penawaran terbaru
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-2">⭐ Beri rating</p>
              <p className="text-sm text-blue-100">
                Rating Anda membantu kami meningkatkan kualitas layanan
              </p>
            </div>
          </div>
        </div>

        {/* Developer Team Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4 shadow-lg">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Dibuat dengan{" "}
              <Heart className="inline h-5 w-5 text-red-500 animate-pulse" />{" "}
              oleh
            </h3>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              MahaGo Developer Team
            </h4>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
              Tim developer yang berdedikasi untuk menciptakan solusi
              transportasi terbaik bagi mahasiswa Indonesia. Kami terus
              berinovasi untuk memberikan pengalaman yang lebih baik.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm font-medium">
                  💻 Full Stack Development
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm font-medium">
                  🎨 UI/UX Design
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-white text-sm font-medium">
                  🚀 Innovation
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-500 rounded-2xl px-6 py-3 shadow-lg">
              <Users className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">
                Bersama Membangun Masa Depan Transportasi
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-xs">
                © 2025 MahaGo. All rights reserved. | Version 1.0.0
              </p>
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-8 text-center bg-white rounded-2xl p-6 border-2 border-gray-100">
          <p className="text-gray-700 mb-4">
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5" />
            Chat dengan Kami
          </button>
        </div>
      </div>
    </div>
  );
}
