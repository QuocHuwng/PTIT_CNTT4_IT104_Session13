import React from "react";

export default function Bai7() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="bg-fuchsia-500 w-48 h-24 flex items-center justify-center rounded-xl shadow-lg text-white font-bold text-2xl"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
    </div>
  );
}