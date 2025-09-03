import React from "react";

export default function Bai5() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-[500px] h-[200px] p-6 bg-sky-200 rounded-lg">
        <p className="text-sky-900 font-semibold">Relative parent</p>

        <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg">
          Absolute child
        </div>
      </div>
    </div>
  );
}