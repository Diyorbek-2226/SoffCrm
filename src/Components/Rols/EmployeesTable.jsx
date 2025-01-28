import React from "react";
import { Pencil, Trash, Filter, Plus } from "lucide-react";

const employees = [
  { name: "Aktam Zaripov", birth: "26-dekabr, 1994", gender: "Erkak", role: "Moderator", branch: "Chilonzor", phone: "+998 94 555 66 00" },
  { name: "Sherali Jo’rayev", birth: "26-dekabr, 1994", gender: "Erkak", role: "O‘qituvchi", branch: "Namangan", phone: "+998 94 555 66 00" },
  { name: "John Doe", birth: "26-dekabr, 1994", gender: "Ayol", role: "Administrator", branch: "Chilonzor", phone: "+998 94 555 66 00" },
  { name: "John Doe", birth: "26-dekabr, 1994", gender: "Ayol", role: "Administrator", branch: "Chilonzor", phone: "+998 94 555 66 00" },
  { name: "John Doe", birth: "26-dekabr, 1994", gender: "Ayol", role: "Administrator", branch: "Chilonzor", phone: "+998 94 555 66 00" },
  { name: "John Doe", birth: "26-dekabr, 1994", gender: "Ayol", role: "Administrator", branch: "Chilonzor", phone: "+998 94 555 66 00" },
];

const EmployeesTable = () => {
  return (
    <div className="p-6" style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}>
      <div className="flex justify-between items-center mb-4 bg-pink-200 p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Hodimlar</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300">
            <Filter size={16} /> Saralash
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600">
            <Plus size={16} /> Hodim qo‘shish
          </button>
        </div>
      </div>

      {/* Large Screen: Table View */}
      <div className="hidden lg:block overflow-x-auto bg-white rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4">To‘liq ismi</th>
              <th className="py-3 px-4">Tug‘ilgan sanasi</th>
              <th className="py-3 px-4">Jinsi</th>
              <th className="py-3 px-4">Vazifasi</th>
              <th className="py-3 px-4">Filial</th>
              <th className="py-3 px-4">Telefon raqami</th>
              <th className="py-3 px-4 text-center">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${index !== employees.length - 1 ? "border-b border-gray-300" : ""}`}
              >
                <td className="py-3 px-4 text-gray-700">{employee.name}</td>
                <td className="py-3 px-4 text-gray-600">{employee.birth}</td>
                <td className="py-3 px-4 text-gray-600">{employee.gender}</td>
                <td className="py-3 px-4 text-gray-600">{employee.role}</td>
                <td className="py-3 px-4 text-gray-600">{employee.branch}</td>
                <td className="py-3 px-4 text-gray-600">{employee.phone}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Pencil size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Small Screen: Card View */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg"
          >
            <h3 className="font-semibold text-gray-700">{employee.name}</h3>
            <p className="text-gray-600">Tug‘ilgan sanasi: {employee.birth}</p>
            <p className="text-gray-600">Jinsi: {employee.gender}</p>
            <p className="text-gray-600">Vazifasi: {employee.role}</p>
            <p className="text-gray-600">Filial: {employee.branch}</p>
            <p className="text-gray-600">Telefon: {employee.phone}</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="text-blue-500 hover:text-blue-700">
                <Pencil size={18} />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesTable;
