import React from "react";
import Layout from "./Layout";

function Filiallar() {
  const notifications = [
    {
      type: "Chilonzor filial",
      manzil: "Chilonzor tumani, Bunyodkor shox ko’chasi, 65",
    },
    {
      type: "Namangan filial",
      manzil: "Namangan viloyati, Uchqo’rg’on tumani",
    },
  ];

  return (
    <Layout>
      <div className="p-0 md:p-6">
        {/* Desktop version */}
        <table className="w-full text-left hidden md:table">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Filiallar</th>
              <th className="py-2 text-end">Manzil</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4 text-end">
                  <span className="text-blue-600 hover:underline cursor-pointer">{notification.manzil}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile version */}
        <div className="md:hidden">
          <div className="flex justify-between text-gray-400 ">
            <h2>Filiallar</h2>
            <h2>Manzil</h2>
          </div>
          <div className="">
            {notifications.map((notification, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <h3 className="font-medium">{notification.type}</h3>
                <div className="flex items-start">
                  <span className="text-blue-600">{notification.manzil}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Filiallar;
