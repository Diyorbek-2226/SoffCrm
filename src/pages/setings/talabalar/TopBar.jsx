import { ChevronRight, Plus } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the current path to display the corresponding label
  const pathName = location.pathname.split("/").pop();

  const getLabel = () => {
    const labels = {
      tulovlar: "To'lovlar",
      kategoriya: "Kategoriya",
    };
    return labels[pathName] || "";
  };

  const currentLabel = getLabel();

  return (
    <div className="bg-orange-50 px-4 py-6 rounded-t-lg mt-5">
      <div className="flex items-center gap-2 text-[20px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <span
              onClick={() => navigate("/talabalar")}
              className="font-semibold text-xl cursor-pointer"
            >
              Talabalar
            </span>
            {getLabel() && (
              <span className="text-gray-400 mx-2">
                <ChevronRight size={20} />
              </span>
            )}
            <span className="text-xl font-thin">{getLabel()}</span>
          </div>
          {currentLabel === "To'lovlar" && (
            <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
              <Plus size={18} /> Filiallar qo'shish
            </button>
          )}
          {currentLabel === "Kategoriya" && (
            <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
              <Plus size={18} /> Filiallar qo'shish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
