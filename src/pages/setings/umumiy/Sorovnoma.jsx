import React from "react";
import Layout from "./Layout";

function Sorovnoma() {
  const notifications = [
    { type: "Banner" },
    { type: "Youtube" },
    { type: "Instagram" },
    { type: "Telegram" },
    { type: "Facebook" },
    { type: "Kimdir orqali" },
  ];
  return (
    <Layout>
      <div className="p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">So'rovnoma turi</th>
              <th className="py-2 text-end">Lorem</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-4">{notification.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Sorovnoma;
