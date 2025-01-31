import { ChevronRight, Plus, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../../Components/Modal.jsx/Modal";

function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const menuItems = [
    { label: "Check", pathName: "check" },
    { label: "Filiallar", pathName: "filiallar" },
    { label: "Xabarnomalar", pathName: "xabarnomalar" },
    { label: "So'rovnoma", pathName: "sorovnoma" },
    { label: "Raqamni belgilash", pathName: "raqamnibelgilash" },
  ];

  const handleSettingsClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(`/sozlamalar/${path}`);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white md:bg-orange-50 px-0 md:px-4 py-6 rounded-t-lg mt-10 md:mt-5 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-[20px]">
          <div className="relative md:hidden" ref={dropdownRef}>
            <span
              className="font-semibold text-2xl cursor-pointer flex items-center"
              onClick={handleSettingsClick}
            >
              Umumiy sozlamalar <ChevronDown size={20} className="ml-1 mt-2" />
            </span>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => handleMenuItemClick(item.pathName)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
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
              <span className="text-xl font-semibold md:font-thin">
                {getLabel()}
              </span>
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
