import React from "react";
import Layout from "./Layout";

function Darajalar() {
  const notifications = [
    { type: "Bosh manager", time: "2 000 000 so’m", price: "4 000 000 so’m" },
    { type: "Servis manager", time: "1 500 000 so’m", price: "3 000 000 so’m" },
    { type: "Qoravul", time: "1 000 000 so’m", price: "2 000 000 so’m" },
  ];

  return (
    <Layout>
      <div className="p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Lavozim</th>
              <th className="py-2">Yarim stavka</th>
              <th className="py-2 text-end">Bir stavka</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4">{notification.time}</td>
                <td className="py-4 text-end">{notification.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Darajalar;
