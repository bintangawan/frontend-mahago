import { useNavigate, useParams } from "react-router-dom";
import {
  X,
  Star,
  MapPin,
  Navigation,
  Calendar,
  User,
  MessageSquare,
  Bike,
  Utensils,
  Package,
} from "lucide-react";

export default function DetailReview() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Data dummy - nanti bisa diganti dengan fetch dari API berdasarkan id
  const orderDetail = {
    id: id,
    type: "Ojek",
    pickup: "Kampus USU",
    destination: "Merdeka Walk",
    price: 5000,
    completedAt: "Kemarin, 14:30",
    driverName: "Budi Santoso",
    rating: 5,
    reviewText:
      "Driver sangat ramah dan profesional. Perjalanan sangat nyaman dan aman. Sangat direkomendasikan! Terima kasih MahaGo! 🚀",
    reviewDate: "13 November 2024, 15:00",
  };

  const handleClose = () => navigate(-1);

  const getTypeIcon = (type) => {
    if (type === "Ojek") return <Bike className="h-6 w-6" />;
    if (type === "Makanan") return <Utensils className="h-6 w-6" />;
    return <Package className="h-6 w-6" />;
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

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-1">Detail Review</h2>
            <p className="text-green-100 text-sm">Review perjalanan Anda</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Order Type Card */}
          <div className="bg-linear-to-r from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl text-green-600 shadow-sm">
                {getTypeIcon(orderDetail.type)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">
                  {orderDetail.type}
                </h3>
                <p className="text-sm text-gray-600">
                  {orderDetail.completedAt}
                </p>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-5 space-y-4">
            <h4 className="font-bold text-gray-800 text-sm mb-3">
              Detail Perjalanan
            </h4>

            {/* Pickup */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 rounded-lg shrink-0">
                <MapPin className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Penjemputan</p>
                <p className="text-sm font-medium text-gray-800 wrap-break-word">
                  {orderDetail.pickup}
                </p>
              </div>
            </div>

            {/* Destination */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                <Navigation className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-1">Tujuan</p>
                <p className="text-sm font-medium text-gray-800 wrap-break-word">
                  {orderDetail.destination}
                </p>
              </div>
            </div>

            {/* Driver */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg shrink-0">
                <User className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">Driver</p>
                <p className="text-sm font-medium text-gray-800">
                  {orderDetail.driverName}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Pembayaran</span>
              <span className="text-lg font-bold text-green-600">
                Rp{orderDetail.price.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          {/* Rating Section */}
          <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 p-5">
            <div className="text-center mb-4">
              <h4 className="font-bold text-gray-800 mb-3">Rating Anda</h4>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-8 w-8 ${
                      i < orderDetail.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-3xl font-bold text-yellow-600">
                {orderDetail.rating}/5
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {orderDetail.rating === 5 && "Luar biasa! 🤩"}
                {orderDetail.rating === 4 && "Sangat baik! 😊"}
                {orderDetail.rating === 3 && "Cukup baik 👍"}
                {orderDetail.rating === 2 && "Kurang memuaskan 😐"}
                {orderDetail.rating === 1 && "Perlu perbaikan 😞"}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              <span>Review diberikan pada {orderDetail.reviewDate}</span>
            </div>
          </div>

          {/* Review Text */}
          {orderDetail.reviewText && (
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <h4 className="font-bold text-gray-800">Deskripsi Review</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {orderDetail.reviewText}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
