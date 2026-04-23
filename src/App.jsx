import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 selection:bg-cyan-600 selection:text-white">
      {/* Sticky Navbar is global */}
      <Navbar />

      {/* Home contains all the page sections */}
      <Home />
    </div>
  );
}

export default App;