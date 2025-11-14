import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import Promo from "./pages/Promo";
import Faq from "./pages/Faq";
import Order from "./pages/Order";
import Review from "./pages/Review";
import DetailReview from "./pages/DetailReview";
import DetailProfile from "./pages/DetailProfile";
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
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
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/create-order" element={<Order />} />
          <Route path="/order-review/:id" element={<Review />} />
          <Route path="/detail-review/:id" element={<DetailReview />} />
          <Route path="/detail-profile" element={<DetailProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}
