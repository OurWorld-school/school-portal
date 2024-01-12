import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
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

import InputPreNurseryResult from "./backoffice/AdminPanel/InputResult/InputPreNurseryResult";
import InputNursery3Result from "./backoffice/AdminPanel/InputResult/InputNursery3Result";
import InputBasic1Result from "./backoffice/AdminPanel/InputResult/InputBasic1Result";
import InputBasic2Result from "./backoffice/AdminPanel/InputResult/InputBasic2Result";
import InputBasic3Result from "./backoffice/AdminPanel/InputResult/InputBasic3Result";
import InputBasic4Result from "./backoffice/AdminPanel/InputResult/InputBasic4Result";
import InputNursery2Result from "./backoffice/AdminPanel/InputResult/InputNusery2Result";
import UserProfileScreen from "./screens/UserProfileScreen/UserProfileScreen";
import CheckPreNursery from "./screens/CheckResult/CheckNursery1result/CheckPreNursery";
import CheckNursery2Result from "./screens/CheckResult/CheckNursery1result/CheckNursery2Result";
import CheckNursery3Result from "./screens/CheckResult/CheckNursery1result/CheckNursery3Result";
import CheckBasic1Result from "./screens/CheckResult/CheckNursery1result/CheckBasic1Result";
import CheckBasic2Result from "./screens/CheckResult/CheckNursery1result/CheckBasic2Result";
import CheckBasic3Result from "./screens/CheckResult/CheckNursery1result/CheckBasic3Result";
import CheckBasic4Result from "./screens/CheckResult/CheckNursery1result/CheckBasic4Result";
import { ViewNursery2Result } from "./screens/ViewResultScreen/ViewNursery2Result";
import { ViewNursery3Result } from "./screens/ViewResultScreen/ViewNursery3Result";
import { ViewBasic1Result } from "./screens/ViewResultScreen/ViewBasic1Result";
import { ViewBasic2Result } from "./screens/ViewResultScreen/ViewBasic2Result";
import { ViewBasic3Result } from "./screens/ViewResultScreen/ViewBasic3Result";
import { ViewBasic4Result } from "./screens/ViewResultScreen/ViewBasic4Result";
import { ViewPreNurseryResult } from "./screens/ViewResultScreen/ViewPreNurseryResult";
import UpdatePreNurseryResults from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdatePreNurseryResults";
import UpdateNursery1result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateNursery1Result";
import UpdateNursery2Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateNursery2Result";
import UpdateNursery3Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateNursery3Result";
import UpdateBasic1Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic1Result";

import UpdateBasic3Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic3Result";
import UpdateBasic4Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic4Result";
import UpdateBasic2Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic2Result";
import { AdminUserPreNurseryResult } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserPreNurseryResult";
import { AdminUserNursery2Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserNursery2Result";
import { AdminUserNursery3Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserNursery3Result";
import { AdminUserBasic1Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserBasic1Result";
import { AdminUserBasic2Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserBasic2Result";
import { AdminUserBasic3Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserBasic3Result";
import { AdminUserBasic4Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserBasic4Result";
import { AdminUserResultNursery1 } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserResultNursery";
import UpdateStudentClass from "./backoffice/AdminPanel/AdminDashboard/UpdateStudentClass/UpdateStudentClass";
import AssignRoles from "./backoffice/AdminPanel/AdminUsers/AdminStaffs/AssignRoles";
import AssignAdmin from "./backoffice/AdminPanel/AdminUsers/AdminStaffs/AssignAdmin";
import StaffLogin from "./screens/LoginScreen/StaffLogin";
import AdminScratchCard from "./backoffice/AdminPanel/AdminDashboard/ScratchCard/AdminScratchCard";
import ScratchCardView from "./backoffice/AdminPanel/AdminDashboard/ScratchCard/ScratchCardView";
import AdminUserCreche from "./backoffice/AdminPanel/AdminUsers/Nursery1students/AdminUserCreche";
import ResetPassword from "./screens/ResetPssword Screen/ResetPassword";

function App() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* <TopNavBar /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-user-profile" element={<UserProfileScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admission" element={<AdmissionPortal />} />
        <Route path="/staff-registeration" element={<StaffRegisteration />} />
        <Route path="/check-result" element={<CheckResult />} />
        <Route path="/Nursery1-result" element={<CheckNursery1result />} />
        <Route path="/online-result" element={<ScratchCard />} />
        <Route path="/admission-portal" element={<AdmissionPortal />} />
        <Route path="/Admin" element={<AdminUsers />} />
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
          path="/post-nursery1result/:id"
          element={<InputNursery1result />}
        />

        {/* /////// */}
        <Route
          path="/post-prenursery-result/:id"
          element={<InputPreNurseryResult />}
        />
        <Route
          path="/post-nursery2result/:id"
          element={<InputNursery2Result />}
        />
        <Route
          path="/post-nursery3result/:id"
          element={<InputNursery3Result />}
        />
        <Route path="/post-basic1result/:id" element={<InputBasic1Result />} />
        <Route path="/post-basic2result/:id" element={<InputBasic2Result />} />
        <Route path="/post-basic3result/:id" element={<InputBasic3Result />} />
        <Route path="/post-basic4result/:id" element={<InputBasic4Result />} />
        {/* result checker routes */}
        <Route path="/PreNursery-result" element={<CheckPreNursery />} />
        <Route path="/Nursery2-result" element={<CheckNursery2Result />} />
        <Route path="/Nursery3-result" element={<CheckNursery3Result />} />
        <Route path="/Basic1-result" element={<CheckBasic1Result />} />
        <Route path="/Basic2-result" element={<CheckBasic2Result />} />
        <Route path="/Basic3-result" element={<CheckBasic3Result />} />
        <Route path="/Basic4-result" element={<CheckBasic4Result />} />
        {/* Result Checker Routes */}
        {/* View student result */}
        <Route
          path="/my-results-prenursery/:selectedYear/:userId/:selectedTerm"
          element={<ViewPreNurseryResult />}
        />
        <Route
          path="/my-results-nursery1/:selectedYear/:userId/:selectedTerm"
          element={<ViewResult />}
        />
        <Route
          path="/my-results-nursery2/:selectedYear/:userId/:selectedTerm"
          element={<ViewNursery2Result />}
        />
        <Route
          path="/my-results-nursery3/:selectedYear/:userId/:selectedTerm"
          element={<ViewNursery3Result />}
        />
        <Route
          path="/my-results-basic1/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic1Result />}
        />
        <Route
          path="/my-results-basic2/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic2Result />}
        />
        <Route
          path="/my-results-basic3/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic3Result />}
        />
        <Route
          path="/my-results-basic4/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic4Result />}
        />
        {/* view student result */}
        {/* Update result by admin */}
        <Route
          path="/view-prenursery-student-result-update/:id"
          element={<UpdatePreNurseryResults />}
        />
        <Route
          path="/view-nursery1-student-result-update/:id"
          element={<UpdateNursery1result />}
        />
        <Route
          path="/view-nursery2-student-result-update/:id"
          element={<UpdateNursery2Result />}
        />
        <Route
          path="/view-nursery3-student-result-update/:id"
          element={<UpdateNursery3Result />}
        />
        <Route
          path="/view-basic1-student-result-update/:id"
          element={<UpdateBasic1Result />}
        />
        <Route
          path="/view-basic2-student-result-update/:id"
          element={<UpdateBasic2Result />}
        />
        <Route
          path="/view-basic3-student-result-update/:id"
          element={<UpdateBasic3Result />}
        />
        <Route
          path="/view-basic4-student-result-update/:id"
          element={<UpdateBasic4Result />}
        />
        {/* Update result by admin */}
        {/* View User Result by admin */}
        <Route
          path="/view-prenursery-student-result/:id"
          element={<AdminUserPreNurseryResult />}
        />
        <Route
          path="/view-nursery1-student-result/:id"
          element={<AdminUserResultNursery1 />}
        />

        <Route
          path="/view-nursery2-student-result/:id"
          element={<AdminUserNursery2Result />}
        />
        <Route
          path="/view-nursery3-student-result/:id"
          element={<AdminUserNursery3Result />}
        />

        <Route
          path="/view-basic1-student-result/:id"
          element={<AdminUserBasic1Result />}
        />
        <Route
          path="/view-basic2-student-result/:id"
          element={<AdminUserBasic2Result />}
        />
        <Route
          path="/view-basic3-student-result/:id"
          element={<AdminUserBasic3Result />}
        />
        <Route
          path="/view-basic4-student-result/:id"
          element={<AdminUserBasic4Result />}
        />
        {/* View User Result by admin */}
        {/* Admin update student current class */}
        <Route
          path="/updateusserclassby-admin/:id"
          element={<UpdateStudentClass />}
        />
        {/* Admin update student current class */}
        {/* Assign User Roles */}
        <Route
          path="/update-user-roles-by-admin/:id"
          element={<AssignRoles />}
        />
        <Route path="/Creche" element={<AdminUserCreche />} />
        {/* Assign User Roles */}
        {/* Assign User Admin */}
        <Route
          path="/update-user-admin-by-admin/:id"
          element={<AssignAdmin />}
        />
        {/* Assign User Admin */}
        {/* scratch Cards */}
        <Route path="/Admin-view-scratchCard" element={<AdminScratchCard />} />
        <Route path="/scratchcard" element={<ScratchCardView />} />
        {/* Scratch card */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
