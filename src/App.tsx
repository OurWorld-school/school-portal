import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Header from "./components/Header/Header";
import Register from "./screens/RegisterationScreen/Register";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import StaffRegisteration from "./screens/RegisterationScreen/StaffRegisteration";
import CheckResult from "./screens/CheckResult/CheckResult";
import CheckNursery1result from "./screens/CheckResult/CheckNursery1result/CheckNursery1result";
// import ViewResult from "./screens/ViewResultScreen/ViewResult";
import AdminUsers from "./backoffice/AdminPanel/AdminUsers/AdminUsers";
import Nursery1students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Nursery1students";
import InputNursery1result from "./backoffice/AdminPanel/InputResult/InputNursery1result";
import AdmissionPortal from "./screens/AdminsionPortal/AdminssionPortal";
import { ViewResult } from "./screens/ViewResultScreen/ViewResult";

function App() {
  return (
    <div>
      {/* <TopNavBar /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admission" element={<AdmissionPortal />} />

        <Route path="/staff-registeration" element={<StaffRegisteration />} />
        <Route path="/check-result" element={<CheckResult />} />
        <Route path="/Nursery1-result" element={<CheckNursery1result />} />
        <Route
          path="/my-result/:selectedYear/:userId/:selectedTerm"
          element={<ViewResult />}
        />
        <Route path="/Admin-layout" element={<AdminUsers />} />
        <Route path="/nusery1" element={<Nursery1students />} />
        {/* ///////// Input results*/}
        <Route
          path="/post-nursery1-result/:id"
          element={<InputNursery1result />}
        />

        {/* /////// */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
