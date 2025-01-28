import React from "react";
import Layout from "./Layout";

function RaqamniBelgilash() {
  const notifications = [
    { type: "Qayta telefon qilish kerak", color: "#52C41A" },
    { type: "Telefonini ko’tarmadi", color: "#FADB14" },
    { type: "Ko’proq ma’lumot berish kerak", color: "#13C2C2" },
    { type: "Adashib tushib qolgan", color: "#FA541C" },
  ];

  return (
    <Layout>
      <div className="p-0 md:p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Belgilash turi</th>
              <th className="py-2 text-end">Ranglar</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
                <td className="py-4 text-end">
                  <div
                    className="w-6 h-6 rounded-full inline-block"
                    style={{ backgroundColor: notification.color }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default RaqamniBelgilash;
