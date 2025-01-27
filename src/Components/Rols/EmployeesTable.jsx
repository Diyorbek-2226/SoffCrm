import React from "react";
import { Pencil, Trash } from "lucide-react";

const EmployeesTable = () => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Hodimlar</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + Hodim qo‘shish
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg">
          <thead>
            <tr className="bg-blue-50">
              <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Ismi</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Lavozimi</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">Telefon</th>
              <th className="py-3 px-4 font-medium text-gray-700 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Aliyev Alisher",
                position: "Filial direktori",
                phone: "+998 90 123 45 67",
              },
              {
                name: "Karimova Madina",
                position: "Administrator",
                phone: "+998 93 987 65 43",
              },
              {
                name: "Usmonov Anvar",
                position: "O‘qituvchi",
                phone: "+998 91 765 43 21",
              },
            ].map((employee, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4 text-gray-700">{employee.name}</td>
                <td className="py-3 px-4 text-gray-600">{employee.position}</td>
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
    </div>
  );
};

export default EmployeesTable;
