import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brasilidades from "./pages/Brasilidades";
import Kobi from "./pages/Kobi";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/brasilidades" element={<Brasilidades />} />
        <Route path="/projetos/kobi" element={<Kobi />} />
      </Routes>
    </BrowserRouter>
  );
}
