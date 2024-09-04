import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomeAdaptive from "./pages/home";
import AuthAdaptive from "./pages/auth";
import Error404Adaptive from "./pages/404";

const App = () => {
  const isLoggedIn = localStorage?.getItem("isLoggedIn");

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
