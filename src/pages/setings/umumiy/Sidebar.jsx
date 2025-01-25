import React from "react";
import { NavLink } from "react-router-dom";
import { Bell, Check, Building2, Phone, ClipboardList } from "lucide-react";

function Sidebar() {
  const menuItems = [
    { icon: Check, label: "Check", pathName: "check" },
    { icon: Building2, label: "Filiallar", pathName: "filiallar" },
    { icon: Bell, label: "Xabarnomalar", pathName: "xabarnomalar" },
    { icon: ClipboardList, label: "So'rovnoma", pathName: "sorovnoma" },
    { icon: Phone, label: "Raqamni belgilash", pathName: "raqamnibelgilash" },
  ];

  return (
    <div className="hidden lg:block min-h-screen w-[300px] bg-white shadow-sm border-r">
      <ul className="space-y-3 py-6 text-gray-700">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={`/sozlamalar/${item.pathName}`}
            className={({ isActive }) =>
              `flex items-center gap-2 py-2 px-4 rounded-lg ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
