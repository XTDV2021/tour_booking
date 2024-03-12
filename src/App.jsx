import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import Booking from "./pages/Booking";
import SearchPage from "./pages/SearchPage";
import TourDanang from "./pages/ToursDanang";
import TourNhaTrang from "./pages/ToursNhaTrang";
import TourPhuQuoc from "./pages/ToursPhuQuoc";
import TourSapa from "./pages/ToursSapa";
import TourVungtau from "./pages/ToursVungtau";
import PaymentPage from "./pages/PaymentPage";
import ToursDaLat from "./pages/ToursDaLat";
import ToursHue from "./pages/ToursHue";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/danang" element={<TourDanang />} />
        <Route path="/nha-trang" element={<TourNhaTrang />} />
        <Route path="/phu-quoc" element={<TourPhuQuoc />} />
        <Route path="/sapa" element={<TourSapa />} />
        <Route path="/vung-tau" element={<TourVungtau />} />
        <Route path="/dalat" element={<ToursDaLat />} />
        <Route path="/hue" element={<ToursHue />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
