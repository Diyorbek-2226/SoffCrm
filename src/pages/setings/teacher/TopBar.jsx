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
      kpi: "KPI",
      oylik: "Oylik",
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
              onClick={() => navigate("/teacher")}
              className="font-semibold text-xl cursor-pointer"
            >
              O'qituvchi
            </span>
            {getLabel() && (
              <span className="text-gray-400 mx-2">
                <ChevronRight size={20} />
              </span>
            )}
            <span className="text-xl font-thin">{getLabel()}</span>
          </div>
          {currentLabel === "Oylik" && (
            <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
              <Plus size={18} /> Foiz qo'shish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
