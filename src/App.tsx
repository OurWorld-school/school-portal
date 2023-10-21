import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Header from "./components/Header/Header";
import Register from "./screens/RegisterationScreen/Register";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import StaffRegisteration from "./screens/RegisterationScreen/StaffRegisteration";

function App() {
  return (
    <div>
      <TopNavBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/staff-registeration" element={<StaffRegisteration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
