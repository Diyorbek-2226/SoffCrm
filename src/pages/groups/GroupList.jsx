import React from 'react';
import Button from "../../Components/Buttons/button";
import Table from "../../Components/Table/Table";


const GroupList = () => {
  const columns = ["Guruh"]; 

  const data = [
    { group: "Guruh A" },
    { group: "Guruh B" },
    { group: "Guruh C" },
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
          Dars jadvali
        </h1>

        <Button
          variant="custom"
          className="hover:bg-green-600 font-sans text-base mr-[20px]"
        >
          + Guruh qo'shish
        </Button>
      </div>

      {/* Table */}
      <div className="px-2">
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

export default GroupList;
