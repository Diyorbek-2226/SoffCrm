import React from "react";
import Layout from "./Layout";

function Filiallar() {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="font-semibold w-full">
            <p className="text-gray-400">Filiallar</p>
            <div className="border-b border-gray-300 py-4">Chilonzor filial</div>
            <div className="border-b border-gray-300 py-4">Namangan filial</div>
          </div>
          <div className="font-semibold w-full">
            <p className="text-gray-400">Manzil</p>
            <div className="border-b border-gray-300 py-4">
              <a
                href="https://www.google.com/maps/place/Chilonzor+tumani,+Bunyodkor+shox+ko%E2%80%99chasi,+65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Chilonzor tumani, Bunyodkor shox ko’chasi, 65
              </a>
            </div>
            <div className="border-b border-gray-300 py-4">
              <a
                href="https://www.google.com/maps/place/Namangan+viloyati,+Uchqo’rg’on+tumani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Namangan viloyati, Uchqo’rg’on tumani
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Filiallar;
