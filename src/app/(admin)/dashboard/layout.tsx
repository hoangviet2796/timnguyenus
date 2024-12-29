import React from "react";
import Sider from "./components/Sider";

export default function DashBoardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="h-screen flex ">
        {/* LEFT */}
        <div className="w-[300px]">
       <Sider/>
        </div>
        {/* RIGHT */}
        <div className="w-[100%]">
        {children}
        </div>
      </div>
    );
  }