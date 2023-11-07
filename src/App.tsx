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
import ScratchCard from "./screens/ScratchCard/ScratchCard";
import Nursery2students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Nursery2students";
import PreNurserystudents from "./backoffice/AdminPanel/AdminUsers/Nursery1students/PreNurseryStudents";
import Nursery3students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Nursery3students";
import Basic1students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Basic1students";
import Basic2students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Basic2students";
import Basic3students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Basic3students";
import Basic4students from "./backoffice/AdminPanel/AdminUsers/Nursery1students/Basic4students";
import AdminViewStaffs from "./backoffice/AdminPanel/AdminUsers/AdminStaffs/AdminViewStaffs";
import AdminViewRoles from "./backoffice/AdminPanel/AdminUsers/AdminStaffs/AdminViewRoles";
import AdminViewAdmin from "./backoffice/AdminPanel/AdminUsers/AdminStaffs/AdminViewAdmins";
import AdminNursery1Results from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminNursery1results";
import AdminPreNurseryResult from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminPreNurseryResult";
import AdminNursery2Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminNursery2Result";
import AdminNursery3Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminNursery3Result";
import AdminBasic1Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic1Result";
import AdminBasic2Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic2Result";
import AdminBasic3Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic3Result";
import AdminBasic4Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic4Result";
import {
  AdminUserResultNursery,
  AdminUserResultNursery2ndterm,
  AdminUserResultNursery3rdterm,
} from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserResultNursery";
import InputPreNurseryResult from "./backoffice/AdminPanel/InputResult/InputPreNurseryResult";
import InputNursery3Result from "./backoffice/AdminPanel/InputResult/InputNursery3Result";

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
        <Route path="/online-result" element={<ScratchCard />} />
        <Route
          path="/my-result/:selectedYear/:userId/:selectedTerm"
          element={<ViewResult />}
        />
        <Route path="/Admin-layout" element={<AdminUsers />} />
        <Route path="/pre-nursery" element={<PreNurserystudents />} />
        <Route path="/nusery1" element={<Nursery1students />} />
        <Route path="/nusery2" element={<Nursery2students />} />
        <Route path="/nusery3" element={<Nursery3students />} />
        <Route path="/basic1" element={<Basic1students />} />
        <Route path="/basic2" element={<Basic2students />} />
        <Route path="/basic3" element={<Basic3students />} />
        <Route path="/basic4" element={<Basic4students />} />
        {/* ///////// Input results*/}
        <Route path="/staffs" element={<AdminViewStaffs />} />
        <Route path="/viewroles" element={<AdminViewRoles />} />
        <Route path="/viewadmins" element={<AdminViewAdmin />} />
        <Route path="/pre-nurseryResult" element={<AdminPreNurseryResult />} />
        <Route path="/nusery1Result" element={<AdminNursery1Results />} />
        <Route path="/nusery2Result" element={<AdminNursery2Result />} />
        <Route path="/nusery3Result" element={<AdminNursery3Result />} />
        <Route path="/basic1Result" element={<AdminBasic1Result />} />
        <Route path="/basic2Result" element={<AdminBasic2Result />} />
        <Route path="/basic3Result" element={<AdminBasic3Result />} />
        <Route path="/basic4Result" element={<AdminBasic4Result />} />
        <Route
          path="/post-nursery1-result/:id"
          element={<InputNursery1result />}
        />
        <Route
          path="/view-nursery1-student-result/:id"
          element={<AdminUserResultNursery />}
        />
        <Route
          path="/view-nursery1-student-result-2ndterm/:id"
          element={<AdminUserResultNursery2ndterm />}
        />
        <Route
          path="/view-nursery1-student-result-3rdterm/:id"
          element={<AdminUserResultNursery3rdterm />}
        />
        {/* /////// */}
        <Route
          path="/post-prenursery-result/:id"
          element={<InputPreNurseryResult />}
        />

        <Route
          path="/post-nursery3result/:id"
          element={<InputNursery3Result />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
