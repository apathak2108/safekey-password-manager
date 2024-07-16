import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAdaptive from "./pages/home";
import AuthAdaptive from "./pages/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAdaptive />} />
        <Route path="/auth" element={<AuthAdaptive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
