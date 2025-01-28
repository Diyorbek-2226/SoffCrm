import React from "react";
import ideicon from "../../assets/icons/edit.svg";
import deleicon from "../../assets/icons/delet.svg";

// Button komponentasi
const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseStyle = "py-2 px-4 rounded font-semibold transition-all duration-300 text-base";

  const variantStyles = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "text-gray-500 hover:bg-gray-500 hover:text-white",
    custom: "bg-[rgba(160,217,17,1)] text-white hover:bg-[rgba(140,197,17,1)]",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Groups = () => {
  const data = [
    {
      group: "Matematika 01",
      course: "Matematika",
      level: "Boshlang’ich",
      day: "Juft kun",
      start: "13:00",
      end: "15:00",
      type: "Offline",
      room: "A_5",
      status: "Active",
    },
    {
      group: "G 1 dasturlash",
      course: "Frontend",
      level: "Junior",
      day: "Juft kun",
      start: "13:00",
      end: "15:00",
      type: "Offline",
      room: "A_14",
      status: "Active",
    },
    {
      group: "Intern 12",
      course: "Backend",
      level: "Junior",
      day: "Toq kun",
      start: "13:00",
      end: "15:00",
      type: "Offline",
      room: "A_8",
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col flex-1 p-4 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center bg-yellow-50 h-20 px-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Guruhlar</h1>
        <Button variant="custom" className="font-sans text-base">
          + Guruh qo'shish
        </Button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="table-auto w-full text-left border-none">
          <thead>
            <tr className="bg-white text-lg font-semibold text-gray-700">
              <th className="p-3">Guruh</th>
              <th className="p-3">Kurs</th>
              <th className="p-3">Level</th>
              <th className="p-3">Kun</th>
              <th className="p-3">Boshlanishi</th>
              <th className="p-3">Tugashi</th>
              <th className="p-3">Turi</th>
              <th className="p-3">Xona</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`font-sans text-sm ${index % 2 === 1 ? "bg-yellow-50" : "bg-white"}`}>
                <td className="p-3 text-gray-800">{item.group}</td>
                <td className="p-3 text-gray-800">{item.course}</td>
                <td className="p-3 text-gray-800">{item.level}</td>
                <td className="p-3 text-gray-800">{item.day}</td>
                <td className="p-3 text-gray-800">{item.start}</td>
                <td className="p-3 text-gray-800">{item.end}</td>
                <td className="p-3 text-gray-800">{item.type}</td>
                <td className="p-3 text-gray-800">{item.room}</td>
                <td className="p-3 text-gray-800">{item.status}</td>
                <td className="p-3 flex gap-2">
                  <Button variant="outline" className="text-blue-500 hover:bg-blue-500 hover:text-white">
                    <img src={ideicon} alt="Edit Icon" />
                  </Button>
                  <Button variant="outline" className="text-red-500 hover:text-white">
                    <img src={deleicon} alt="Delete Icon" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card-style layout for smaller screens */}
      <div className="block sm:hidden">
        {data.map((item, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.group}</h2>
            <p className="text-gray-600">Kurs: {item.course}</p>
            <p className="text-gray-600">Level: {item.level}</p>
            <p className="text-gray-600">Kun: {item.day}</p>
            <p className="text-gray-600">Boshlanishi: {item.start}</p>
            <p className="text-gray-600">Tugashi: {item.end}</p>
            <p className="text-gray-600">Turi: {item.type}</p>
            <p className="text-gray-600">Xona: {item.room}</p>
            <p className="text-gray-600">Status: {item.status}</p>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="text-blue-500 hover:bg-blue-500 hover:text-white">
                <img src={ideicon} alt="Edit Icon" />
              </Button>
              <Button variant="outline" className="text-red-500 hover:text-white">
                <img src={deleicon} alt="Delete Icon" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
