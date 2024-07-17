import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAdaptive from "./pages/home";
import AuthAdaptive from "./pages/auth";
import Error404Adaptive from "./pages/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAdaptive />} />
        <Route path="/auth" element={<AuthAdaptive />} />
        <Route path="*" element={<Error404Adaptive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
