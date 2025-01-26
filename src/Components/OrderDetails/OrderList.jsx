import { ChevronDown, Download, Edit, Plus } from "lucide-react";

const applications = [
  {
    id: 1,
    name: "Javlon Javliyev",
    status: "Accepted",
    course: "Mobile",
    schedule: "Se-Pa-Sha / 10:00-12:00",
    date: "11-11-22",
    moderator: "Doniyor Abdullayev",
  },
  {
    id: 2,
    name: "Javlon Javliyev",
    status: null,
    course: "Frontend",
    schedule: "Se-Pa-Sha / 10:00-12:00",
    date: "11-11-22",
    moderator: "Doniyor Abdullayev",
  },
  {
    id: 3,
    name: "Akobir To'rayev",
    status: "Rejected",
    course: "Backend",
    schedule: "Se-Pa-Sha / 10:00-12:00",
    date: "11-11-22",
    moderator: "Doniyor Abdullayev",
  },
];

export default function ApplicationsTable() {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Buyurtmalar ro'yxati</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 h-11 px-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-5 h-5" />
              Import
            </button>
            <button className="flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <Plus className="w-5 h-5" />
              Buyurtma qo'shish
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 mb-6">
          {["Statusi", "Ranglar bo'yicha", "Guruh", "Kurslar", "Moderator", "Sababi"].map((filter) => (
            <div key={filter} className="relative">
              <button className="w-full h-11 px-4 text-left border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50">
                <span className="text-gray-700 text-sm font-medium">{filter}</span>
                <span className="text-gray-500 flex items-center gap-2">
                  Hammasi
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="w-12 p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">O'quvchining ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Guruh / Fan</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Dars kuni va vaqti</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Qo'shilgan sana</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Moderator</th>
                <th className="w-20 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{app.name}</span>
                      {app.status && (
                        <span
                          className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${app.status === "Accepted" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                        >
                          {app.status}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500">{app.course}</td>
                  <td className="p-4 text-sm text-gray-500">{app.schedule}</td>
                  <td className="p-4 text-sm text-gray-500">{app.date}</td>
                  <td className="p-4 text-sm text-gray-500">{app.moderator}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <ChevronDown className="w-5 h-5 text-gray-400" />
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
