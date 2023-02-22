import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../libs";
import { HomeRouter, NotFound } from "../pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomeRouter />} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to='not-found' />} />
      </Routes>
    </>
  );
};
