import { ChevronRight, Plus } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathName = location.pathname.split("/").pop();

  const getLabel = () => {
    const labels = {
      tulovlar: "To'lovlar",
      darajalar: "Darajalar",
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
                onClick={() => navigate("/manager")}
                className="font-semibold text-xl cursor-pointer hidden md:block"
              >
                Manager
              </span>
              {getLabel() && (
                <span className="text-gray-400 mx-2 hidden md:block">
                  <ChevronRight size={20} />
                </span>
              )}
              <span className="text-xl font-semibold md:font-thin">
                {getLabel()}
              </span>
            </div>
            {currentLabel === "Darajalar" && (
              <button className="bg-[#FA8C16] flex items-center gap-2 text-sm text-white pl-2 pr-4 py-2 rounded-lg">
                <Plus size={18} /> Manager qo'shish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
