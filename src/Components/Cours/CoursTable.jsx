import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function CourseList() {
  const courses = [
    { id: 1, name: "Inliz tili" },
    { id: 2, name: "Rus tili" },
    { id: 3, name: "Matematika" },
    { id: 4, name: "Dasturlash" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Kurslar yo’nalishi</h1>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center gap-2 w-full sm:w-auto">
            <Plus className="w-4 h-4" />
            Yo’nalish qo’shish
          </button>
        </div>
        <div className="divide-y mt-4">
          <div className="text-base text-gray-900 font-semibold mb-2">Kurslar turi</div>
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-4 first:pt-0 last:pb-0"
            >
              <span className="text-base text-gray-900">{course.name}</span>
              <div className="flex items-center gap-2">
                <button className="text-teal-500 hover:text-teal-600 hover:bg-teal-50 p-2 rounded-md">
                  <Pencil className="w-4 h-4" />
                  <span className="sr-only">Edit {course.name}</span>
                </button>
                <button className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-md">
                  <Trash2 className="w-4 h-4" />
                  <span className="sr-only">Delete {course.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
