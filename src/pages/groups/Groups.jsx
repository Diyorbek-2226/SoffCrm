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

  // Ustunlar uchun kerakli stil
  const headerStyle = {
    fontFamily: "sans-serif",  // Sans-serif family
    fontSize: "1rem",          // 1rem font size
    fontWeight: "500",
    lineHeight: "24px",
    textAlign: "left",
    textDecoration: "none",
    color: "rgba(146, 159, 175, 1)",
  };

  // Matnlar uchun stil (font-size: 1rem)
  const textStyle = {
    fontSize: "1rem",  // 1rem font size
    color: "rgba(55, 65, 81, 1)",  // Default text color
  };

  return (
    <div className="flex flex-col flex-1 p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-yellow-50 h-20 px-4 mb-6">
        <h1 className="font-montserrat text-[20px] font-semibold text-[rgba(37,62,95,1)] leading-[28px] text-left underline-offset-4 text-decoration-skip-ink-none">
          Guruhlar
        </h1>
        <Button variant="custom" className="font-sans text-base">
          + Guruh qo'shish
        </Button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-white text-[16px] font-medium text-[rgba(146,159,175,1)] leading-[24px] text-left underline-offset-4 text-decoration-skip-ink-none">
              <th className="p-3" style={headerStyle}>Guruh</th>
              <th className="p-3" style={headerStyle}>Kurs</th>
              <th className="p-3" style={headerStyle}>Level</th>
              <th className="p-3" style={headerStyle}>Kun</th>
              <th className="p-3" style={headerStyle}>Boshlanishi</th>
              <th className="p-3" style={headerStyle}>Tugashi</th>
              <th className="p-3" style={headerStyle}>Turi</th>
              <th className="p-3" style={headerStyle}>Xona</th>
              <th className="p-3" style={headerStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`font-sans text-sm ${index % 2 === 1 ? "bg-yellow-50" : "bg-white"} border-b`}>
                <td className="p-3" style={textStyle}>{item.group}</td>
                <td className="p-3" style={textStyle}>{item.course}</td>
                <td className="p-3" style={textStyle}>{item.level}</td>
                <td className="p-3" style={textStyle}>
                  <span className="inline-block">{item.day}</span>
                </td>
                <td className="p-3" style={textStyle}>{item.start}</td>
                <td className="p-3" style={textStyle}>{item.end}</td>
                <td className="p-3" style={textStyle}>{item.type}</td>
                <td className="p-3" style={textStyle}>{item.room}</td>
                <td className="p-3" style={textStyle}>{item.status}</td>
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
    </div>
  );
};

export default Groups;
