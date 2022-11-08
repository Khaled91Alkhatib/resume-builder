import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Homepage, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
