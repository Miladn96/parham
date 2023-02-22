import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./home";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
