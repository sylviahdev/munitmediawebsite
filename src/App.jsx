import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navbar stays at the top */}
      <Navbar />
      
      {/* Content starts below Navbar */}
      <Home />
    </div>
  );
}

export default App;