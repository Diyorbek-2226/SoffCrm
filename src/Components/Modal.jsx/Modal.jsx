import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1a293c80] backdrop-blur-[5px] flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg m-1 md:w-[500px]">
        {children}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100 transition"
          >
            O'chirish
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}
