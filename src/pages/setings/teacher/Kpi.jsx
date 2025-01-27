import React from "react";
import Layout from "./Layout";

function Kpi() {
  const notifications = [
    { type: "Birinchi to’lovi uchun bonus miqdori", price: "0 so’m" },
  ];
  const notifications2 = [
    {
      type: "Buyurtmani qbul qilmagani uchun jarima miqdori",
      price: "0 so’m",
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

export default Kpi;
