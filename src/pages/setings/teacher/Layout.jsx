import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="w-full">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
