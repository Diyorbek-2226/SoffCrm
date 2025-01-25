import React from "react";
import { ChevronDown } from "lucide-react";
import Layout from "./Layout";

function Check() {
  return (
    <Layout>
      <form className="space-y-6 w-full bg-white p-6 shadow-sm">
        {/* Logo Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Logo
          </label>
          <div className="h-32 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Upload logo
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Sarlavha
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Sarlavhani kiriting"
          />
        </div>

        {/* Receipt Tag */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Chek tag yozuvi
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Footer */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Footer
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Language Select */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Chek tili
          </label>
          <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select...</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Saqlash
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Check;
