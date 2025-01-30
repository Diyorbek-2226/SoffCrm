// src/Components/RoomSelection/RoomSelection.jsx
import React from "react";
import Button from "../../Components/Buttons/button";
import Table from "../../Components/Table/Table";

const RoomSelection = () => {
  const columns = ["Xona", "O'rinlar soni"];  // Ustun nomlari

  const data = [
    { room: "A_5", seats: 20 },  // Xonalar va o'rinlar soni
    { room: "A_14", seats: 25 },
    { room: "A_8", seats: 18 },
  ];

  const handleEdit = (item) => {
    console.log("Edit", item);
  };

  const handleDelete = (item) => {
    console.log("Delete", item);
  };

  return (
    <div className="flex flex-col flex-1 p-3">
      <div className="flex justify-between bg-yellow-50 h-20 max-w-screen items-center mb-6">
        <h1 className="font-montserrat text-[20px] font-semibold text-[rgba(37,62,95,1)] leading-[28px] text-left underline-offset-4 text-decoration-skip-ink-none ml-[20px]">
          Xonalar
        </h1>

        <Button
          variant="custom"
          className="hover:bg-green-600 font-sans text-base mr-[20px]"
        >
          + Xona qo'shish
        </Button>
      </div>
      <div className="px-2">
        {/* Table komponentasini chaqiramiz */}
        <Table
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default RoomSelection;
