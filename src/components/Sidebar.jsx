import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md rounded-xl p-5">
      <h2 className="font-bold text-lg mb-4">Filters</h2>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border p-2 rounded mb-4"
      />

      <div className="space-y-2">
        <button className="block w-full text-left bg-blue-500 text-white px-3 py-2 rounded">
          All
        </button>
        <button className="block w-full text-left px-3 py-2">
          Videos
        </button>
        <button className="block w-full text-left px-3 py-2">
          Branding
        </button>
        <button className="block w-full text-left px-3 py-2">
          Marketing
        </button>
      </div>
    </div>
  );
}

export default Sidebar;