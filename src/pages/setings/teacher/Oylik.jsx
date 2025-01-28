import React from "react";
import Layout from "./Layout";

function Oylik() {
  const notifications = [
    { type: "Odatiy foiz", foiz: "30 %" },
    { type: "1 yillik tajribaga ega o’qituvchi uchun", foiz: "40 %" },
  ];
  return (
    <Layout>
      <div className="p-0 md:p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Qo'shimcha foiz turi</th>
              <th className="py-2 text-end min-w-28">
                Foiz miqdori
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4 text-end">{notification.foiz}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Oylik;
