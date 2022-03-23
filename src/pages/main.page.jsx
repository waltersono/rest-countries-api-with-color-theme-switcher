import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
