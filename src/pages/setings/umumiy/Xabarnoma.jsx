import React from "react";
import Layout from "./Layout";

function Xabarnoma() {
  const notifications = [
    { type: "Dars vaqtini eslatish", time: "18:00", enabled: true },
    { type: "Qoldirilgan vaziflar", time: "21:00", enabled: true },
    { type: "Qoldirilgan darslar", time: "21:00", enabled: false },
  ];

  return (
    <Layout>
      <div className="p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Xabarnoma turi</th>
              <th className="py-2">Vaqt</th>
              <th className="py-2 text-end">Foallashtirish</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4">{notification.time}</td>
                <td className="py-4 text-end">
                  <input
                    type="checkbox"
                    checked={notification.enabled}
                    className="w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Xabarnoma;
