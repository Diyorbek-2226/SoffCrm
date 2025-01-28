import React from "react";
import { Pencil, Trash } from "lucide-react";

const RolesTable = () => {
  return (
    <div className="p-6 bg-pink-100 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Ro‘llar</h2>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
          + Ro‘l qo‘shish
        </button>
      </div>

      {/* For larger screens (table layout) */}
      <div className="overflow-x-auto lg:block hidden">
        <table className="w-full border-collapse bg-white rounded-lg">
          <thead>
            <tr className="bg-pink-50">
              <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Darajasi</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Daraja izohi</th>
              <th className="py-3 px-4 font-medium text-gray-700 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                role: "Filial direktori",
                description: "Faqat bitta filialni ko‘rib boshqaradi",
              },
              {
                role: "Administrator",
                description: "O‘quvchi qabul qiladi",
              },
              {
                role: "O‘qituvchi",
                description: "Dars beradi, ustoz",
              },
            ].map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4 text-gray-700">{item.role}</td>
                <td className="py-3 px-4 text-gray-600">{item.description}</td>
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

      {/* For smaller screens (card layout) */}
      <div className="lg:hidden">
        {[
          {
            role: "Filial direktori",
            description: "Faqat bitta filialni ko‘rib boshqaradi",
          },
          {
            role: "Administrator",
            description: "O‘quvchi qabul qiladi",
          },
          {
            role: "O‘qituvchi",
            description: "Dars beradi, ustoz",
          },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg mb-6 p-6">
            <h3 className="text-xl font-semibold text-gray-800">{item.role}</h3>
            <p className="text-sm text-gray-600">Izoh: {item.description}</p>
            <div className="flex justify-end gap-2 mt-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Pencil size={18} className="text-blue-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Trash size={18} className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesTable;
