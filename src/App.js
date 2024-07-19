import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeAdaptive from "./pages/home";
import AuthAdaptive from "./pages/auth";
import Error404Adaptive from "./pages/404";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/auth" />
          }
        />
        <Route path="/auth" element={<AuthAdaptive />} />
        <Route path="*" element={<Error404Adaptive />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
