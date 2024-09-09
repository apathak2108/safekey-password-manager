import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeAdaptive from "./pages/home";
import AuthAdaptive from "./pages/auth";
import Error404Adaptive from "./pages/404";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const isLoggedIn = localStorage?.getItem("isLoggedIn");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <HomeAdaptive /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!isLoggedIn ? <AuthAdaptive /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Error404Adaptive />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
