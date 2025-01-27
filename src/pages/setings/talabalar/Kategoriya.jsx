import React from "react";
import Layout from "./Layout";

function Kategoriya() {
  const notifications = [
    { type: "O’gil bolalar", soni: "112", foiz: "82 %" },
    { type: "Qizlar", soni: "28", foiz: "18 %" },
  ];
  const notifications2 = [
    {
      type: "O’quvchi",
      soni: "48",
      foiz: "28 %",
    },
    {
      type: "Abituriyent",
      soni: "72",
      foiz: "60 %",
    },
    {
      type: "Talaba",
      soni: "20",
      foiz: "12 %",
    },
  ];
  return (
    <Layout>
      <div className="p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Kategoriya turi  </th>
              <th className="py-2">Soni</th>
              <th className="py-2 text-end">Foiz</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4">{notification.soni}</td>
                <td className="py-4 text-end">{notification.foiz}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full text-left mt-8">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Kategoriya turi</th>
              <th className="py-2">Soni</th>
              <th className="py-2 text-end">Foiz</th>
            </tr>
          </thead>
          <tbody>
            {notifications2.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4">{notification.soni}</td>
                <td className="py-4 text-end">{notification.foiz}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Kategoriya;
