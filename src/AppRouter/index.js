import React from "react";
import { Route, Redirect, Router, Routes } from "react-router-dom";

import Home from "../components/Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gbon-compliance" element={<Home />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
};

export default AppRouter;
