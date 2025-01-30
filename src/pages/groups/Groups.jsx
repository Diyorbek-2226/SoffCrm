import React from "react";
import Button from "../../Components/Buttons/button";
import Table from "../../Components/Table/Table";  

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

  const columns = ["Guruh", "Kurs", "Level", "Kun", "Boshlanishi", "Tugashi", "Turi", "Xona", "Status"];

  const handleEdit = (item) => {
    console.log("Edit item:", item);
  };

  const handleDelete = (item) => {
    console.log("Delete item:", item);
  };

  return (
    <div className="flex flex-col flex-1 p-4 bg-white">
      <div className="flex justify-between items-center bg-yellow-50 h-20 px-4 mb-6">
        <h1 className="font-montserrat text-[20px] font-semibold text-[rgba(37,62,95,1)] leading-[28px] text-left underline-offset-4 text-decoration-skip-ink-none">
          Guruhlar
        </h1>
        <Button variant="custom" className="font-sans text-base">
          + Guruh qo'shish
        </Button>
      </div>
      <Table data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Groups;
