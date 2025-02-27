import React from "react";
import ideicon from '../../assets/icons/edit.svg';
import deleicon from "../../assets/icons/delet.svg";
const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseStyle = "py-2 px-4 rounded font-semibold transition-all duration-300 text-base";
  
  // Har bir variant uchun kerakli ranglar va hover effektlar
  const variantStyles = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "text-gray-500 hover:bg-gray-500 hover:text-white",
    custom: "bg-[rgba(160,217,17,1)] text-white hover:bg-[rgba(140,197,17,1)]", // Yangi rangni qo'shdik
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

const Schedule = () => {
  return (
    <div className="flex flex-col flex-1 p-3 bg-gray-100 ml-[-1em]">
      {/* Header */}
      <div className="flex justify-between bg-yellow-50 h-20 max-w-screen items-center mb-6">
        <h1 className="text-[29px] font-montserrat font-semibold text-gray-800 ml-[20px] leading-[28px]">
          Dars Jadvali
        </h1>

        <Button
          variant="custom"
          className="hover:bg-green-600 font-sans text-base mr-[20px]"
          style={{ backgroundColor: 'rgba(160, 217, 17, 1)' }}
        >
          + Guruh qo'shish
        </Button>
      </div>

      <div className="px-2">
        <div className="hidden sm:block">
          <table className="table-auto w-full text-left border-none">
            <thead>
              <tr className="bg-white-100 text-lg font-semibold text-gray-700 font-sans">
                <th className="p-2 text-base">Guruh</th>
              </tr>
            </thead>
            <tbody>
              {[{
                group: "Matematika 01",
              },
              {
                group: "G 1 dasturlash",
              },
              {
                group: "Intern 12",
              }].map((item, index) => (
                <tr key={index} className={index % 2 === 1 ? "bg-yellow-50" : "bg-white font-sans text-sm"}>
                  <td className="p-3 text-gray-800">{item.group}</td>
                  <td className="p-3 flex gap-2">
                    <Button variant="outline" className="text-blue-500 hover:bg-blue-500 hover:text-white font-sans">
                      <img src={ideicon} alt="Edit Icon" />
                    </Button>
                    <Button variant="outline" className="text-red-500 hover:text-white font-sans">
                      <img src={deleicon} alt="Delete Icon" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="block sm:hidden">
          {[{
            group: "Matematika 01",
          },
          {
            group: "G 1 dasturlash",
          },
          {
            group: "Intern 12",
          }].map((item, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">{item.group}</h2>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" className="text-blue-500 hover:bg-blue-500 hover:text-white font-sans">
                  <img src={ideicon} alt="Edit Icon" />
                </Button>
                <Button variant="outline" className="text-red-500 hover:text-white font-sans">
                  <img src={deleicon} alt="Delete Icon" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
