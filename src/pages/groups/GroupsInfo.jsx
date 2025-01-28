import React, { useState } from "react";
import strel from "../../assets/icons/strelka.svg";
import dayicon from "../../assets/icons/dayicon.svg";
import keldi from "../../assets/icons/keldi.svg";
import birdars from "../../assets/icons/birdars.svg";
import sababsz from "../../assets/icons/sababsz.svg";
import sababli from "../../assets/icons/sababli.svg";

const GroupsInfo = () => {
  const dates = [
    "07-10",
    "09-10",
    "11-10",
    "14-10",
    "16-10",
    "18-10",
    "21-10",
    "23-10",
    "25-10",
    "28-10",
  ];

  const [students, setStudents] = useState([
    {
      name: "Jamshidxon Ziyoxonov",
      phone: "+991 91 123 45 67",
      attendance: ["present", "absent", "present", "", "", "", "", "", "", ""],
    },
    {
      name: "Jamshidxon Ziyoxonov",
      phone: "+991 91 123 45 67",
      attendance: ["first", "present", "present", "", "", "", "", "", "", ""],
    },
    {
      name: "Jamshidxon Ziyoxonov",
      phone: "+991 91 123 45 67",
      attendance: ["present", "present", "excused", "", "", "", "", "", "", ""],
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [studentIndex, setStudentIndex] = useState(null);
  const [dateIndex, setDateIndex] = useState(null);

  const handleAttendanceChange = (studentIndex, dateIndex) => {
    setStudentIndex(studentIndex);
    setDateIndex(dateIndex);
    setModalOpen(true);
  };

  const handleStatusSelect = (status) => {
    const newStudents = [...students];
    newStudents[studentIndex].attendance[dateIndex] = status;
    setStudents(newStudents);
    setModalOpen(false);
  };

  return (
    <div className="p-5 bg-gray-100 font-sans ml-[-1.5rem]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between bg-yellow-50 h-20 items-center mb-6 px-4">
        <h1 className="text-[25px] sm:text-[29px] font-montserrat font-semibold text-gray-800 flex items-center">
          Guruhlar
          <span className="px-4">
            <img src={strel} alt="" className="inline-block align-middle" />
          </span>
          <span className="font-montserrat font-normal text-xl sm:text-2xl">
            Guruh ma’lumotlari
          </span>
        </h1>
        <div className="relative mt-4 sm:mt-0">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">
            <img src={dayicon} alt="" />
          </span>
          <select className="pl-11 pr-4 py-2 rounded border border-gray-300 bg-white text-sm shadow-sm">
            <option>01-11-22</option>
          </select>
        </div>
      </div>

      {/* Table for large screens */}
      <div className="bg-white pt-8 mt-12 hidden sm:block overflow-x-auto sm:overflow-visible">
        <table className="min-w-full table-auto text-base">
          <thead>
            <tr>
              <th
                className="px-4 py-3 sm:px-6 text-left text-sm font-semibold text-gray-700"
                style={{ width: "150px", whiteSpace: "nowrap" }}
              >
                Talaba
              </th>
              <th
                className="px-4 py-3 sm:px-6 text-left text-sm font-semibold text-gray-700"
                style={{ width: "150px", whiteSpace: "nowrap" }}
              >
                Telefon raqam
              </th>
              {dates.map((date, index) => (
                <th
                  key={index}
                  className="px-4 py-3 sm:px-6 text-sm font-semibold text-gray-700 text-center border-b border-gray-300"
                  style={{
                    width: "120px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, studentIndex) => (
              <tr
                key={studentIndex}
                className={studentIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td
                  className="px-4 py-3 sm:px-6 text-sm text-gray-700 border-b border-gray-300"
                  style={{
                    width: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {student.name}
                </td>
                <td
                  className="px-4 py-3 sm:px-6 text-sm text-gray-700 border-b border-gray-300"
                  style={{
                    width: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {student.phone}
                </td>
                {student.attendance.map((status, dateIndex) => (
                  <td
                    key={dateIndex}
                    className="px-4 py-3 sm:px-6 text-center text-sm border-b border-gray-300 cursor-pointer"
                    onClick={() => handleAttendanceChange(studentIndex, dateIndex)}
                    style={{ width: "120px" }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center mx-auto rounded-full border-2 border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-200 shadow-md">
                      {status === "present" && <img src={keldi} alt="" />}
                      {status === "first" && <img src={birdars} alt="" />}
                      {status === "absent" && <img src={sababsz} alt="" />}
                      {status === "excused" && <img src={sababli} alt="" />}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for small screens */}
      <div className="sm:hidden">
        {students.map((student, studentIndex) => (
          <div key={studentIndex} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <div className="text-lg font-semibold text-gray-700">{student.name}</div>
            <div className="text-sm text-gray-500">{student.phone}</div>
            <div className="mt-4">
              {student.attendance.map((status, dateIndex) => (
                <div
                  key={dateIndex}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <span className="text-sm">{dates[dateIndex]}</span>
                  <div
                    className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white cursor-pointer hover:border-gray-500 hover:bg-gray-200 shadow-md"
                    onClick={() => handleAttendanceChange(studentIndex, dateIndex)}
                  >
                    {status === "present" && <img src={keldi} alt="" />}
                    {status === "first" && <img src={birdars} alt="" />}
                    {status === "absent" && <img src={sababsz} alt="" />}
                    {status === "excused" && <img src={sababli} alt="" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full sm:w-72">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Tanlang:</h3>
            <div className="flex flex-col gap-3">
              <div
                onClick={() => handleStatusSelect("present")}
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-green-500 text-black cursor-pointer hover:bg-green-400"
              >
                <img src={keldi} alt="" />
                <span>Keldi</span>
              </div>
              <div
                onClick={() => handleStatusSelect("first")}
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-yellow-500 text-black cursor-pointer hover:bg-yellow-400"
              >
                <img src={birdars} alt="" />
                <span>Birinchi Dars</span>
              </div>
              <div
                onClick={() => handleStatusSelect("absent")}
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-red-500 text-black cursor-pointer hover:bg-red-400"
              >
                <img src={sababsz} alt="" />
                <span>Sababsiz</span>
              </div>
              <div
                onClick={() => handleStatusSelect("excused")}
                className="flex items-center gap-3 py-2 px-3 rounded-lg bg-blue-500 text-black cursor-pointer hover:bg-blue-400"
              >
                <img src={sababli} alt="" />
                <span>Sababli</span>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupsInfo;
