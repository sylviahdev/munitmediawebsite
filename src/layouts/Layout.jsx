import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow pt-28">
        <Outlet />
      </main>

      <Footer />
      <WhatsApp />
    </div>
  );
}
