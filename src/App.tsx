import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Layout from "./layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
