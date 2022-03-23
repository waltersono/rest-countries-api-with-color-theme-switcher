import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import DetailPage from "./pages/detail.page";
import MainLayout from "./pages/main.page";
import Topbar from "./components/topbar.component";

const App = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route exact path="detail/:name" element={<DetailPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
