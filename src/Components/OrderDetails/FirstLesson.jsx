import { ChevronDown, Download, Edit, Plus } from "lucide-react";

const lesson = [
  {
    id: 1,
    name: "Javlon Javliyev",
    phone: "+998 90 123 45 67",
    date: "11-11-22",
    course: "Mobile",
    moderator: "Doniyor Abdullayev",
  },
  {
    id: 2,
    name: "Javlon Javliyev",
    phone: "+998 90 123 45 68",
    date: "11-11-22",
    course: "Frontend",
    moderator: "Doniyor Abdullayev",
  },
  {
    id: 3,
    name: "Akobir To'rayev",
    phone: "+998 90 123 45 69",
    date: "11-11-22",
    course: "Backend",
    moderator: "Doniyor Abdullayev",
  },
];

export default function FirstLesson() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[rgba(240,245,255,1)]">
        <div className="max-w-[1400px] mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Birinchi darsga yozilganlar</h1>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 h-11 px-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 -mt-6">
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

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-12 p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">O'quvchining ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Telefon raqam</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Qo'shilgan sana</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Kurs</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Moderator</th>
                <th className="w-20 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {lesson.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{app.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500">{app.phone}</td>
                  <td className="p-4 text-sm text-gray-500">{app.date}</td>
                  <td className="p-4 text-sm text-gray-500">{app.course}</td>
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
