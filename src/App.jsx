import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Fitur from "./pages/Fitur";
import Promo from "./pages/Promo";
import Kontak from "./pages/Kontak";
import Order from "./pages/Order";
import Review from "./pages/Review";
import DetailReview from "./pages/DetailReview";
import CreateOrder from "./components/CreateOrder";

export default function App() {
  return (
    <Router>
      {/* Navbar ditampilkan di semua halaman */}
      <Navbar />
      <CreateOrder />

      {/* Isi halaman */}
      <main className="pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/create-order" element={<Order />} />
          <Route path="/order-review/:id" element={<Review />} />
          <Route path="/detail-review/:id" element={<DetailReview />} />
        </Routes>
      </main>
    </Router>
  );
}
