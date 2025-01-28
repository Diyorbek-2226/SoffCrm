import { Download, RotateCcw, PencilIcon } from "lucide-react";

export default function AttendanceTable() {
  const headerLabels = [
    { title: "Sana", value: "01-11-22" },
    { title: "Kun", value: "Hammasi" },
    { title: "Darajasi", value: "Hammasi" },
    { title: "Ranglar bo'yicha", value: "Hammasi" },
    { title: "Moderator", value: "Hammasi" },
    { title: "Sababi", value: "Hammasi" },
  ];

  const tableData = [
    {
      name: "Javlon Javliyev",
      phone: "+998 91 123 45 67",
      balance: "-400 000",
      group: "Mobile",
      teacher: "Doniyor Abdullayev",
      reason: "Lorem",
    },
    {
      name: "Javlon Javliyev",
      phone: "+998 91 123 45 67",
      balance: "-400 000",
      group: "Frontend",
      teacher: "Doniyor Abdullayev",
      reason: "Lorem",
    },
    {
      name: "Akobir To'rayev",
      phone: "+998 91 123 45 67",
      balance: "-400 000",
      group: "Backend",
      teacher: "Doniyor Abdullayev",
      reason: "Lorem",
    },
  ];

  return (
    <div className="p-6 bg-[#F9FAFB] ml-[-10px]">
      {/* Header */}
      <div
        className="flex items-center h-20 w-full justify-between mb-6 ml-[-10px]"
        style={{ backgroundColor: 'rgba(249, 240, 255, 1)' }}
      >
        <h1 className="text-2xl font-semibold text-[#111827]">Davomat</h1>
        <button className="flex items-center gap-2 border border-[#D1D5DB] text-[#374151] bg-white hover:bg-gray-50 text-sm font-medium px-3 py-2 h-9 rounded-md">
          <Download className="h-[18px] w-[18px]" />
          Import
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-6 ml-[-10px]">
        {headerLabels.map((item, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-[#6B7280]">{item.title}</span>
            <select
              defaultValue={item.value}
              className="w-full bg-white border border-[#D1D5DB] text-[#111827] h-9 text-sm font-normal rounded-md"
            >
              <option value={item.value}>{item.value}</option>
            </select>
          </div>
        ))}
      </div>

      {/* Table (Full Layout for Desktop, Card Layout for Mobile) */}
      <div className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden ml-[-10px]">
        {/* Table Layout for Larger Screens */}
        <div className="hidden sm:block">
          <table className="min-w-full table-auto">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="w-[48px] py-3 px-6">
                  <input type="checkbox" className="border border-[#D1D5DB] rounded-[4px] w-[18px] h-[18px]" />
                </th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">O'quvchining ismi</th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">Telefon raqam</th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">Balans</th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">Guruh</th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">O'qituvchi</th>
                <th className="text-[#374151] font-medium py-3 px-6 text-sm">Sababi</th>
                <th className="w-[100px]"></th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-[#E5E7EB] hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <input type="checkbox" className="border border-[#D1D5DB] rounded-[4px] w-[18px] h-[18px]" />
                  </td>
                  <td className="py-4 px-6 text-[#111827] text-sm font-medium">{row.name}</td>
                  <td className="py-4 px-6 text-[#111827] text-sm">{row.phone}</td>
                  <td className="py-4 px-6 text-[#111827] text-sm">{row.balance}</td>
                  <td className="py-4 px-6 text-[#111827] text-sm">{row.group}</td>
                  <td className="py-4 px-6 text-[#111827] text-sm">{row.teacher}</td>
                  <td className="py-4 px-6 text-[#111827] text-sm">{row.reason}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-[#9CA3AF] hover:text-[#111827] hover:bg-gray-100 w-8 h-8 rounded-md">
                        <RotateCcw className="h-[18px] w-[18px]" />
                      </button>
                      <button className="text-[#9CA3AF] hover:text-[#111827] hover:bg-gray-100 w-8 h-8 rounded-md">
                        <PencilIcon className="h-[18px] w-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Layout for Mobile Screens */}
        <div className="block sm:hidden">
          {tableData.map((row, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-[#111827]">{row.name}</h2>
              <p className="text-sm text-[#6B7280]">{row.phone}</p>
              <p className="text-sm text-[#111827]">Balans: {row.balance}</p>
              <p className="text-sm text-[#111827]">Guruh: {row.group}</p>
              <p className="text-sm text-[#111827]">O'qituvchi: {row.teacher}</p>
              <p className="text-sm text-[#111827]">Sababi: {row.reason}</p>
              <div className="flex gap-2 mt-2">
                <button className="text-[#9CA3AF] hover:text-[#111827] hover:bg-gray-100 w-8 h-8 rounded-md">
                  <RotateCcw className="h-[18px] w-[18px]" />
                </button>
                <button className="text-[#9CA3AF] hover:text-[#111827] hover:bg-gray-100 w-8 h-8 rounded-md">
                  <PencilIcon className="h-[18px] w-[18px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
