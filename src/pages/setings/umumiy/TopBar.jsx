import { ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../Components/Modal.jsx/Modal";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const pathName = location.pathname.split("/").pop();

  const getLabel = () => {
    const labels = {
      check: "Check sozlamalari",
      filiallar: "Filiallar",
      xabarnomalar: "Xabarnomalar",
      sorovnoma: "So'rovnoma",
      raqamnibelgilash: "Raqamni belgilash",
    };
    return labels[pathName] || "";
  };

  const currentLabel = getLabel();

  return (
    <>
      <div className="bg-white md:bg-orange-50 px-0 md:px-4 py-6 rounded-t-lg mt-10 md:mt-5">
        <div className="flex items-center gap-2 text-[20px]">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <span
                onClick={() => navigate("/sozlamalar")}
                className="font-semibold text-xl cursor-pointer hidden md:block"
              >
                Umumiy sozlamalar
              </span>
              {getLabel() && (
                <span className="text-gray-400 mx-2 hidden md:block">
                  <ChevronRight size={20} />
                </span>
              )}
              <span className="text-xl font-semibold md:font-thin">{getLabel()}</span>
            </div>
            {currentLabel === "Filiallar" && (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg"
              >
                <Plus size={18} /> Filiallar qo'shish
              </button>
            )}
            {currentLabel === "So'rovnoma" && (
              <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
                <Plus size={18} /> So'rovnoma qo'shish
              </button>
            )}
            {currentLabel === "Raqamni belgilash" && (
              <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
                <Plus size={18} /> Rang qo'shish
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-semibold mb-2">Yo'naltiruv nomi</h2>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          defaultValue="Tiktok"
        />
        <h2 className="text-lg font-semibold mt-3 mb-2">Reklama URL manzili</h2>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          defaultValue="https://jadkajdhdkstiktok"
        />
        <h2 className="text-lg font-semibold mt-3 mb-2">Sana</h2>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          defaultValue="9.18.2022"
        />
      </Modal>
    </>
  );
}

export default TopBar;
