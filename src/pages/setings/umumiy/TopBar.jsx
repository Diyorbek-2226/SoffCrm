import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the current path to display the corresponding label
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
    <div className="bg-orange-50 px-4 py-6 rounded-t-lg mt-5">
      <div className="flex items-center gap-2 text-[20px]">
        <div className="flex justify-between items-center w-full">
          <div>
            <span
              onClick={() => navigate("/sozlamalar")}
              className="font-semibold cursor-pointer"
            >
              Umumiy sozlamalar
            </span>
            <span className="text-gray-400">{getLabel() ? " > " : ""}</span>
            <span>{getLabel()}</span>
          </div>
          {currentLabel === "Filiallar" && (
            <button className="bg-[#FA8C16] text-sm text-white px-4 py-2 rounded-lg">
              Filiallar qo'shish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
