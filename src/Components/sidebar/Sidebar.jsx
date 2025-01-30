import { useState } from "react";
import {
  Timer,
  ClipboardList,
  DollarSign,
  GraduationCap,
  Users,
  BookOpen,
  UserCog,
  Settings,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";

const menuItems = [
  { icon: Timer, label: "Anlitika", path: "#" },
  {
    icon: ClipboardList,
    label: "Buyurtma",
    path: "#",
    badge: "73 Hug × 20 Hug",
  },
  { icon: DollarSign, label: "Moliya", path: "#" },
  { icon: GraduationCap, label: "Talaba", path: "#" },
  { icon: Users, label: "Guruhlar", path: "#",
    subItems:[
      {label:"Guruhlar",path:"/group"},
      {label:"Dars Jadvali",path:"/dars/jadval"},
      {label:"Xonalar",path:"/xonalar"},
    ]
   },
  { icon: BookOpen, label: "Kurslar", path: "#" },
  { icon: UserCog, label: "HR", path: "#", },
  {
    icon: Settings,
    label: "Sozlamalar",
    path: "#",
    subItems: [
      { label: "Umumiy Sozlamalar", path: "/sozlamalar" },
      { label: "Manager", path: "/manager" },
      { label: "O'qituvchi", path: "/teacher" },
      { label: "Talaba", path: "/talabalar" },
    ],
  },
];

export function Sidebar({ isOpen, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (label) => {
    setExpandedMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div
      className={` 
      fixed  lg:static inset-y-0 left-0 z-50 w-72 min-h-screen  bg-[#1a2234] text-white flex flex-col
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="px-6 py-4">
        <h1 className="text-[#0ea5e9] text-3xl font-semibold">Soff Crm</h1>
      </div>

      <div className="px-4 py-3 border-t border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://picsum.photos/100"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a2234]"></div>
          </div>
          <div>
            <div className="text-md font-medium">Sardorbek Muhtorov</div>
            <div className="text-sm text-gray-400">s.muhtorov@gmail.com</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 py-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            <div
              onClick={() => toggleMenu(item.label)}
              className="flex items-center justify-between px-4 py-2 mt-1 rounded-lg text-gray-300 hover:bg-white/10 hover:text-[#0ea5e9] group transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="text-md">{item.label}</span>
              </div>
              {item.subItems ? (
                expandedMenu === item.label ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                )
              ) : null}
            </div>
            {item.subItems && expandedMenu === item.label && (
              <div className="ml-6 mt-1">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.path}
                    className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/10 hover:text-[#0ea5e9] rounded-lg"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
