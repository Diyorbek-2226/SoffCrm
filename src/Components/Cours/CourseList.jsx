import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const courses = [
  {
    level: "Beginner",
    status: "Active",
    statusColor: "text-green-500",
    branch: "Chilonzor filiali",
    address: "Bunyodkor shox ko’chasi, 65",
    schedule: "Dushanba - Chorshanba - Juma",
    time: "19:00 - 20:30",
    teachers: ["/teacher1.jpg", "/teacher2.jpg"],
  },
  {
    level: "Elementary",
    status: "Start",
    statusColor: "text-yellow-500",
    branch: "Namangan filiali",
    address: "Bunyodkor shox ko’chasi, 65",
    schedule: "Seshanba - Payshanba - Shanba",
    time: "14:00 - 16:00",
    teachers: ["/teacher1.jpg", "/teacher2.jpg"],
  },
];

const KurslarRoyxati = () => {
  const [courseList, setCourseList] = useState(courses);

  const removeCourse = (index) => {
    setCourseList(courseList.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(230, 255, 251, 1)' }}>
            <h2 className="text-2xl font-semibold text-center sm:text-left" style={{ color: 'rgba(37, 62, 95, 1)' }}>
        Kurslar ro’yxati
      </h2>
        <button
          className="text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition mt-2 sm:mt-0"
          style={{ backgroundColor: 'rgba(19, 194, 194, 1)' }}
        >
          + Kurs qo’shish
        </button>
      </div>
      {/* Kurslar ro‘yxati */}
      <div className="p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Ingliz tili</h3>

        {courseList.map((course, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg mb-2">
            {/* Chap tomonda kurs ma'lumotlari */}
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
              <div className="text-lg font-medium flex items-center">
                {course.level}{" "}
                <span className={`${course.statusColor} font-semibold ml-2`}>
                  ● {course.status}
                </span>
              </div>
              <div className="text-gray-600">{course.branch}</div>
              <div className="text-blue-500 cursor-pointer hover:underline">
                {course.address}
              </div>
            </div>

            {/* O‘rtada dars jadvali */}
            <div className="flex flex-col text-center w-full sm:w-1/3 mb-2 sm:mb-0">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                {course.schedule}
              </span>
              <span className="bg-blue-200 text-gray-700 px-3 py-1 rounded-lg mt-2 text-sm">
                {course.time}
              </span>
            </div>

            {/* O‘qituvchilar qismi */}
            <div className="flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
              {course.teachers.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Teacher"
                  className="w-8 h-8 rounded-full -ml-2"
                />
              ))}
              <span className="text-gray-500 text-sm">2+</span>
            </div>

            {/* Tahrirlash va o‘chirish tugmalari */}
            <div className="flex space-x-2 w-full sm:w-auto justify-end">
              <button className="text-gray-500 hover:text-gray-700 transition">
                <Pencil size={18} />
              </button>
              <button
                className="text-red-500 hover:text-red-700 transition"
                onClick={() => removeCourse(index)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Boshqa kurs turlari */}
      <div className="mt-4">
        {["Rus tili", "Matematika", "Dasturlash", "Grafik dizayn", "UX/UI dizayn"].map(
          (category, index) => (
            <div key={index} className="flex justify-between items-center p-4 rounded-lg mb-2">
              <span>{category}</span>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Pencil size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default KurslarRoyxati;
