import React from "react";
import Layout from "./Layout";

function Tulovlar() {
  const notifications = [
    { type: "Buyurtmani qo’shgani uchun bonus miqdori", price: "1 500 so’m" },
    { type: "Birinchi to’lovi uchun bonus miqdori", price: "8 500 so’m" },
    {
      type: "Eski faol talaba uchun har oylik bonus miqdori",
      price: "4 000 so’m",
    },
  ];
  const notifications2 = [
    {
      type: "Buyurtmani qabul qilmagani uchun jarima miqdori",
      price: "2 000 so’m",
    },
    {
      type: "To’lov qilmasdan ketgani uchun jarima miqdori",
      price: "8 500 so’m",
    },
  ];
  return (
    <Layout>
      <div className="p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">To'lov turi</th>
              <th className="py-2 text-end">
                Bonusni o'chirish
                <input
                  type="checkbox"
                  className="w-5 h-5 top-1 ml-2 relative"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4 text-end">{notification.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full text-left mt-8">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Jarima turi</th>
              <th className="py-2 text-end">
                Bonusni o'chirish
                <input
                  type="checkbox"
                  className="w-5 h-5 top-1 ml-2 relative"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications2.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4 text-end">{notification.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Tulovlar;
