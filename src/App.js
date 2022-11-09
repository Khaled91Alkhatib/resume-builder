import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Homepage, Navbar, BuildResume } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/build" element={<BuildResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
