import React from 'react'
import Layout from './Layout'

function Tulov() {
  const notifications = [
    { type: "Ikkita guruhga kelsa bonus miqdori", price: "0 so’m" },
    { type: "Uchta guruhga kelsa bonus miqdori", price: "0 so’m" },
  ];
  return (
    <Layout>
        <div className="md:p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">To'lov turi</th>
              <th className="py-2 text-end ">
              Bonus
              <span className="hidden md:inline">ni o‘chirish</span>
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
      </div>
    </Layout>
  )
}

export default Tulov