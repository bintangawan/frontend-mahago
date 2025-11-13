"use client";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X, Star, MessageSquare, Send } from "lucide-react";

export default function Review() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => navigate(-1);

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Mohon berikan rating terlebih dahulu");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        `Review untuk order #${id} berhasil dikirim! ⭐ Rating: ${rating}/5`
      );
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-hidden">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        <div className="sticky top-0 z-10 bg-linear-to-r from-green-500 to-green-600 rounded-t-3xl p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-1">Beri Review</h2>
            <p className="text-green-100 text-sm">
              Bagaimana pengalaman Anda dengan order #{id}?
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="p-6 space-y-5">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 text-center">
                Rating Perjalanan <span className="text-red-500">*</span>
              </label>

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star
                      className={`h-12 w-12 transition-colors ${
                        star <= (hoverRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <div className="text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-2xl font-bold text-green-600">
                    {rating}/5
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {rating === 5 && "Luar biasa! 🤩"}
                    {rating === 4 && "Sangat baik! 😊"}
                    {rating === 3 && "Cukup baik 👍"}
                    {rating === 2 && "Kurang memuaskan 😐"}
                    {rating === 1 && "Perlu perbaikan 😞"}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MessageSquare className="h-4 w-4 text-green-600" />
                Deskripsi Perjalanan
                <span className="text-gray-400 font-normal text-xs">
                  (Opsional)
                </span>
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Ceritakan pengalaman Anda selama perjalanan..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors resize-none"
              />
              <p className="text-xs text-gray-500 text-right">
                {reviewText.length} karakter
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
              <p className="text-xs text-blue-700 leading-relaxed">
                💡 <span className="font-semibold">Tips:</span> Review Anda
                membantu driver untuk memberikan pelayanan yang lebih baik dan
                membantu pengguna lain dalam memilih layanan.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-white p-6 shrink-0">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === 0}
            className="w-full bg-linear-to-r from-green-500 to-green-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Mengirim...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Kirim Review</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
