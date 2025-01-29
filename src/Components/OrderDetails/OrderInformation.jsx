export default function BuyurtmaRoyshati() {
     return (
       <div className="container p-5 font-sans">
         {/* Sarlavha */}
         <h1 className="text-gray-800 mb-8">Buyurtma ro'yxati</h1>
   
         {/* Buyurtma qo'shish bo'limi */}
         <div className="section mb-10 bg-gray-100 p-5 rounded-lg shadow-sm">
           <h2 className="text-lg font-semibold text-gray-700">Buyurtma ma'lumotlari</h2>
           <button className="add-button bg-green-500 text-white py-2 px-5 rounded-md cursor-pointer mb-4">+ Buyurtma qo'shish</button>
   
           {/* O'quvchilar jadvali */}
           <div className="table-wrapper overflow-x-auto">
             <table className="w-full table-auto mt-4">
               <thead>
                 <tr>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">O'quvchining ismi</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Tug'ilgan sana</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Telefon raqam</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="px-4 py-2 border-b border-gray-200">Akobir To'rayev</td>
                   <td className="px-4 py-2 border-b border-gray-200">1994-Yil, 21-mart</td>
                   <td className="px-4 py-2 border-b border-gray-200">+998 91 123 45 67</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
   
         {/* SMS yuborish bo'limi */}
         <div className="section mb-10 bg-gray-100 p-5 rounded-lg shadow-sm">
           <h2 className="text-lg font-semibold text-gray-700">SMS yuborish</h2>
   
           {/* Kurslar jadvali */}
           <div className="table-wrapper overflow-x-auto">
             <table className="w-full table-auto mt-4">
               <thead>
                 <tr>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Kurs</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Darajasi</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Kun</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Kassa</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Izoh</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Guruh</th>
                   <th className="px-4 py-2 text-left border-b border-gray-300 bg-gray-200">Kelish sanasi</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="px-4 py-2 border-b border-gray-200">Beckend</td>
                   <td className="px-4 py-2 border-b border-gray-200">Coming</td>
                   <td className="px-4 py-2 border-b border-gray-200">Se-Pa-Sha</td>
                   <td className="px-4 py-2 border-b border-gray-200">09:00-11:00</td>
                   <td className="px-4 py-2 border-b border-gray-200">C_20</td>
                   <td className="px-4 py-2 border-b border-gray-200">11-11-22 / 15:00</td>
                   <td className="px-4 py-2 border-b border-gray-200 text-green-500 font-semibold">Confirmed</td>
                 </tr>
               </tbody>
             </table>
           </div>
   
           {/* Rad etish holati */}
           <div className="status bg-red-600 text-white py-2 px-5 rounded-md inline-block mt-4">Rejected</div>
         </div>
       </div>
     );
   }
   