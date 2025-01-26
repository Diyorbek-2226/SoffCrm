import { CalendarDays, ChevronDown, Download, Pencil, Trash } from "lucide-react";

const parents = [
  {
    id: 1,
    studentName: "Javlon Javliyev",
    fatherName: "Javlonbek",
    motherName: "Nazira",
    balance: -400000,
  },
  {
    id: 2,
    studentName: "Akobir To'rayev",
    fatherName: "Tursunboy",
    motherName: "Shahnoza",
    balance: 0,
  },
  {
    id: 3,
    studentName: "Dilnoza Karimova",
    fatherName: "Karim",
    motherName: "Nigora",
    balance: 200000,
  },
];

export default function ParentsTable() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F9F5FF] mt-[-5px]">
        <div className="max-w-[1400px] mx-auto p-6">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-[#1F2937]">Ota-ona</h1>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <button className="flex items-center gap-2 h-11 px-4 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
                <Download className="w-5 h-5" />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-[1400px] mx-auto px-6 -mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 py-6">
          {[ 
            { label: "Sana", icon: <CalendarDays className="w-5 h-5" />, value: "01-11-22" },
            { label: "Kun", value: "Hammasi" },
            { label: "Darajasi", value: "Hammasi" },
            { label: "Kurs", value: "Hammasi" },
            { label: "Ranglar bo'yicha", value: "Hammasi" },
            { label: "Moderator", value: "Hammasi" },
            { label: "O'qituvchi", value: "Hammasi" },
          ].map((filter) => (
            <div key={filter.label} className="relative">
              <button className="w-full h-11 px-4 text-left bg-white border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-50">
                <span className="text-gray-700 text-sm font-medium flex items-center gap-2">
                  {filter.icon}
                  {filter.value}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="max-w-[1400px] mx-auto px-6 -mt-2">
        <div className="overflow-x-auto bg-white">
          <table className="w-full min-w-[800px] border-collapse border-spacing-0">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="w-12 p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">O'quvchining ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Otasing ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Onasining ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Balans</th>
                <th className="w-24 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {parents.map((parent, idx) => (
                <tr
                  key={parent.id}
                  className={`hover:bg-gray-50 ${
                    idx < parents.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="p-4 text-sm text-gray-900">{parent.studentName}</td>
                  <td className="p-4 text-sm text-gray-900">{parent.fatherName}</td>
                  <td className="p-4 text-sm text-gray-900">{parent.motherName}</td>
                  <td className="p-4 text-sm text-gray-900">{parent.balance.toLocaleString()}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Pencil className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Trash className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
