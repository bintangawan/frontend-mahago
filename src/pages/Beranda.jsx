"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  CheckCircle,
  MapPin,
  Navigation,
  Star,
  Package,
  Bike,
  Utensils,
} from "lucide-react";

export default function Beranda() {
  // Data dummy untuk orderan aktif
  const [activeOrders] = useState([
    {
      id: 1,
      type: "Ojek",
      pickup: "Kampus USU",
      destination: "Merdeka Walk",
      price: 5000,
      status: "Mencari Driver",
      time: "5 menit yang lalu",
    },
    {
      id: 2,
      type: "Makanan",
      pickup: "Restoran Sederhana",
      destination: "Jl. Sisingamangaraja No. 45",
      price: 5000,
      status: "Driver Menuju Lokasi",
      time: "2 menit yang lalu",
    },
  ]);

  // Data dummy untuk history orderan
  const [orderHistory] = useState([
    {
      id: 3,
      type: "Ojek",
      pickup: "Rumah",
      destination: "Mall Centre Point",
      price: 5000,
      completedAt: "Kemarin, 14:30",
      driverName: "Budi Santoso",
      rating: null,
    },
    {
      id: 4,
      type: "Benda (Laprak, Laundry)",
      pickup: "Kos Jl. Universitas",
      destination: "Fakultas Teknik USU",
      price: 5000,
      completedAt: "2 hari lalu",
      driverName: "Ahmad Rizki",
      rating: 5,
    },
    {
      id: 5,
      type: "Makanan",
      pickup: "KFC Sun Plaza",
      destination: "Asrama Mahasiswa",
      price: 5000,
      completedAt: "3 hari lalu",
      driverName: "Siti Nurhaliza",
      rating: 4,
    },
  ]);

  const getTypeIcon = (type) => {
    if (type === "Ojek") return <Bike className="h-5 w-5" />;
    if (type === "Makanan") return <Utensils className="h-5 w-5" />;
    return <Package className="h-5 w-5" />;
  };

  const getStatusColor = (status) => {
    if (status.includes("Mencari"))
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    if (status.includes("Menuju"))
      return "bg-blue-100 text-blue-700 border-blue-200";
    return "bg-green-100 text-green-700 border-green-200";
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-linear-to-r from-green-500 to-green-600 pt-12 md:pt-14 pb-8 md:pb-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
            Halo! 👋
          </h1>
          <p className="text-green-100 text-sm md:text-base">
            Selamat datang kembali di MahaGo
          </p>
        </div>
      </div>

      <div className="max-w-4xl mt-5 mx-auto px-4 md:px-6">
        {/* Orderan Aktif */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-green-600" />
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Orderan Aktif
            </h2>
            <span className="ml-auto bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              {activeOrders.length}
            </span>
          </div>

          <div className="space-y-4">
            {activeOrders.length > 0 ? (
              activeOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-md border-2 border-green-100 p-4 md:p-5 hover:shadow-lg transition-shadow"
                >
                  {/* Header Card */}
                  <div className="flex items-start md:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="p-2 bg-green-100 rounded-xl text-green-600 shrink-0">
                        {getTypeIcon(order.type)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-800 text-sm md:text-base truncate">
                          {order.type}
                        </h3>
                        <p className="text-xs text-gray-500">{order.time}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 md:px-3 py-1.5 rounded-full border whitespace-nowrap shrink-0 ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Lokasi */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">
                          Penjemputan
                        </p>
                        <p className="text-sm font-medium text-gray-800 wrap-break-word">
                          {order.pickup}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">Tujuan</p>
                        <p className="text-sm font-medium text-gray-800 wrap-break-word">
                          {order.destination}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-base md:text-lg font-bold text-green-600">
                      Rp{order.price.toLocaleString("id-ID")}
                    </span>
                    <button className="text-xs md:text-sm text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center border-2 border-dashed border-gray-200">
                <Clock className="h-10 md:h-12 w-10 md:w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium text-sm md:text-base">
                  Belum ada orderan aktif
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  Pesan sekarang untuk memulai!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* History Orderan */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              Riwayat Orderan
            </h2>
            <span className="ml-auto bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
              {orderHistory.length}
            </span>
          </div>

          <div className="space-y-3">
            {orderHistory.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2 bg-gray-100 rounded-xl text-gray-600 shrink-0">
                      {getTypeIcon(order.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm truncate">
                        {order.type}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {order.completedAt}
                      </p>
                    </div>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                </div>

                {/* Lokasi Singkat */}
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600 overflow-hidden">
                  <span className="truncate shrink min-w-0">
                    {order.pickup}
                  </span>
                  <span className="shrink-0">→</span>
                  <span className="truncate shrink min-w-0">
                    {order.destination}
                  </span>
                </div>

                {/* Driver & Harga */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
                  <div className="text-xs">
                    <span className="text-gray-500">Driver: </span>
                    <span className="font-medium text-gray-700">
                      {order.driverName}
                    </span>
                  </div>
                  <span className="font-bold text-green-600 text-sm sm:text-base">
                    Rp{order.price.toLocaleString("id-ID")}
                  </span>
                </div>

                {/* Rating / Review Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  {order.rating ? (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < order.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({order.rating}/5)
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">
                      Belum direview
                    </span>
                  )}

                  <Link
                    to={`/order-review/${order.id}`}
                    className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors text-center ${
                      order.rating
                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {order.rating ? "Lihat Review" : "Beri Review"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
