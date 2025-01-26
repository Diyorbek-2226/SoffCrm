import React from "react";
import { NavLink } from "react-router-dom";
import { FileText, Building2, } from "lucide-react";

function Sidebar() {
  const menuItems = [
    { icon: FileText, label: "To'lovlar", pathName: "tulovlar" },
    { icon: Building2, label: "Kategoriya", pathName: "kategoriya" },
  ];

  return (
    <div className="hidden lg:block min-h-screen w-[300px] bg-white shadow-sm border-r">
      <ul className="space-y-3 py-6 text-gray-700">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={`/talabalar/${item.pathName}`}
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
