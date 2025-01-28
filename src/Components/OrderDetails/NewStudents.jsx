import { ChevronDown, Download, Edit, Trash2 } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Javlon Javliyev",
    phone: "+998 90 123 45 67",
    course: "Mobile",
    teacher: "Doniyor Abdullayev",
    balans: "$500",
  },
  {
    id: 2,
    name: "Javlon Javliyev",
    phone: "+998 90 123 45 68",
    course: "Frontend",
    teacher: "Doniyor Abdullayev",
    balans: "$350",
  },
  {
    id: 3,
    name: "Akobir To'rayev",
    phone: "+998 90 123 45 69",
    course: "Backend",
    teacher: "Doniyor Abdullayev",
    balans: "$450",
  },
];

export default function NewStudents() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[rgba(240,245,255,1)]">
        <div className="max-w-full sm:max-w-[1400px] mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Yangi talabalar ro’yxati</h1>
            <div className="flex gap-3">
              {/* Import Button */}
              <button className="flex items-center gap-2 h-11 px-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Import
              </button>

              {/* Talaba qo'shish Button */}
              <button className="flex items-center gap-2 h-11 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
               + Talaba qo’shish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full sm:max-w-[1400px] mx-auto px-6 -mt-6">
        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {["Status", "By Colors", "Group", "Courses", "Teacher"].map((filter) => (
            <div key={filter} className="relative">
              <button className="w-full h-11 px-4 text-left border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50">
                <span className="text-gray-700 text-sm font-medium">{filter}</span>
                <span className="text-gray-500 flex items-center gap-2">
                  All
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Table for larger screens */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-12 p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">O'quvchini ismi</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Telefon raqam</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Balans</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">Kurs</th>
                <th className="p-4 text-left text-sm font-medium text-gray-500">O'qituvchi</th>
                <th className="w-20 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500">{student.phone}</td>
                  <td className="p-4 text-sm text-gray-500">{student.balans}</td>
                  <td className="p-4 text-sm text-gray-500">{student.course}</td>
                  <td className="p-4 text-sm text-gray-500">{student.teacher}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <Edit className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <Trash2 className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for small screens */}
        <div className="lg:hidden">
          {students.map((student) => (
            <div key={student.id} className="bg-white shadow-md rounded-lg mb-6 p-6 flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
              <p className="text-sm text-gray-600">Phone: {student.phone}</p>
              <p className="text-sm text-gray-600">Balans: {student.balans}</p>
              <p className="text-sm text-gray-600">Course: {student.course}</p>
              <p className="text-sm text-gray-600">Teacher: {student.teacher}</p>
              <div className="flex gap-2 justify-end">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Trash2 className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
