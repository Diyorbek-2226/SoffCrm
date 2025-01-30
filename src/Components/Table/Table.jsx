import React from 'react';
import ideicon from '../../assets/icons/edit.svg';  
import deleicon from '../../assets/icons/delet.svg';  

const Table = ({ data, columns, onEdit, onDelete }) => {
  const headerStyle = {
    fontFamily: "sans-serif", 
    fontSize: "1rem", 
    fontWeight: "500",
    lineHeight: "24px",
    textAlign: "left",
    textDecoration: "none",
    color: "rgba(146, 159, 175, 1)",
  };

  const textStyle = {
    fontSize: "1rem", 
    color: "rgba(55, 65, 81, 1)",
  };

  return (
    <div>
      <div className="block sm:hidden">
        {data.map((item, index) => (
          <div key={index} className={`p-4 ${index % 2 === 1 ? "bg-yellow-50" : "bg-white"} border-b`}>
            <div className="font-bold text-lg">Xona: {item.room}</div>
            <div>O'rinlar soni: {item.seats}</div>
            <div>Guruh: {item.group}</div> 
            <div>Kun: {item.day}</div>
            <div>Vaqt: {item.start} - {item.end}</div> 
            <div className="flex gap-2">
              <button onClick={() => onEdit(item)} className="text-blue-500 hover:bg-blue-500 hover:text-white">
                <img src={ideicon} alt="Edit Icon" />
              </button>
              <button onClick={() => onDelete(item)} className="text-red-500 hover:text-white">
                <img src={deleicon} alt="Delete Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden sm:block">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-white text-[16px] font-medium text-[rgba(146,159,175,1)] leading-[24px] text-left">
              {columns.map((column, index) => (
                <th key={index} className="p-3" style={headerStyle}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={`font-sans text-sm ${index % 2 === 1 ? "bg-yellow-50" : "bg-white"} border-b`}>
                {Object.values(item).map((value, i) => (
                  <td key={i} className="p-3" style={textStyle}>
                    {value}
                  </td>
                ))}
                <td className="p-3 flex gap-2">
                  <button onClick={() => onEdit(item)} className="text-blue-500 hover:bg-blue-500 hover:text-white">
                    <img src={ideicon} alt="Edit Icon" />
                  </button>
                  <button onClick={() => onDelete(item)} className="text-red-500 hover:text-white">
                    <img src={deleicon} alt="Delete Icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
