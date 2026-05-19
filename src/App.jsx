import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brasilidades from "./pages/Brasilidades";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/brasilidades" element={<Brasilidades />} />
      </Routes>
    </BrowserRouter>
  );
}
