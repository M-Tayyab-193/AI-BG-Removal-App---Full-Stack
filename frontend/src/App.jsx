import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancelled from "./pages/PaymentCancelled";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/buy" element={<BuyCredit />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
        <Route path="/payment/cancelled" element={<PaymentCancelled />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
