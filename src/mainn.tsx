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
import Nursery1students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Nursery1students";
import InputNursery1result from "./backoffice/AdminPanel/InputResult/InputNursery1result";
import AdmissionPortal from "./screens/AdminsionPortal/AdminssionPortal";
import { ViewResult } from "./screens/ViewResultScreen/ViewResult";
import ScratchCard from "./screens/ScratchCard/ScratchCard";
import Nursery2students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Nursery2students";
import PreNurserystudents from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/PreNurseryStudents";
import Nursery3students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Nursery3students";
import Basic1students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic1students";
import Basic2students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic2students";
import Basic3students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic3students";
import Basic4students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic4students";
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
import AdminUserCreche from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/AdminUserCreche";
import ResetPassword from "./screens/ResetPssword Screen/ResetPassword";
import Basic5students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic5students";
import Basic6students from "./backoffice/AdminPanel/AdminUsers/StudentsByClasses/Basic6students";
import InputBasic5Result from "./backoffice/AdminPanel/InputResult/InputBasic5Result";
import InputBasic6Result from "./backoffice/AdminPanel/InputResult/InputBasic6Result";
import CheckBasic5Result from "./screens/CheckResult/CheckNursery1result/CheckBasic5Result";
import CheckBasic6Result from "./screens/CheckResult/CheckNursery1result/CheckBasic6Result";
import { ViewBasic5Result } from "./screens/ViewResultScreen/ViewBasic5Result";
import AdminBasic5Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic5Result";
import UpdateBasic5Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic5Result";
import UpdateBasic6Result from "./backoffice/AdminPanel/AdminDashboard/UpdateResults/UpdateBasic6Result";
import { AdminUserBasic5Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminUserBasic5Result";
import { AdminUserBasic6Result } from "./backoffice/AdminPanel/AdminDashboard/AdminUserResults/AdminBasic6Result";
import { ViewBasic6Result } from "./screens/ViewResultScreen/ViewBasic6Result";
import AdminBasic6Result from "./backoffice/AdminPanel/AdminDashboard/AdminResults/AdminBasic6Result";
import UpdatePreNurseryResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdatePreNurseryResultField";
import UpdateNursery1ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateNursery1ResultField";
import UpdateNursery2ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateNursery2ResultField";
import UpdateNursery3ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateNursery3ResultField";
import UpdateBasic1ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic1ResultField";
import UpdateBasic2ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic2ResultField";
import UpdateBasic3ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic3ResultField";
import UpdateBasic4ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic4ResultField";
import UpdateBasic5ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic5ResultFied";
import UpdateBasic6ResultField from "./backoffice/AdminPanel/AdminDashboard/UpdateResultFields/UpdateBasic6ReultField";
import Test from "./components/Test/Test";
import InputBasic1Commulative from "./backoffice/AdminPanel/InputCommulative/InputBasic1Commulative";
import InputPreNurseryCommulative from "./backoffice/AdminPanel/InputCommulative/InputPreNurseryCommulative";
import InputNursery2Commulative from "./backoffice/AdminPanel/InputCommulative/InputNursery2Commulative";
import InputBasic2Commulative from "./backoffice/AdminPanel/InputCommulative/InputBasic2Commulative";
import InputBasic3Commulative from "./backoffice/AdminPanel/InputCommulative/InputBasic3Commulative";
import InputBasic4Commulative from "./backoffice/AdminPanel/InputCommulative/InputBasic4Commulative";
import InputBasic5Commulative from "./backoffice/AdminPanel/InputCommulative/InputBasic5Commulative";
import InputNursery3Commulative from "./backoffice/AdminPanel/InputCommulative/InputNursery3Commulative";
import InputNursery1Commulative from "./backoffice/AdminPanel/InputCommulative/InputNursery1Commulative";
import Basic1ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Basic1ViewCommulative";
import Basic2ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Basic2ViewCommulative";
import Basic3ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Basic3ViewCommulative";
import Basic4ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Basic4ViewCommulative";
import Basic5ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Basic5ViewCommulative";
import Nursery1ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Nursery1ViewCommulative";
import Nursery2ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Nursery2ViewCommulative";
import Nursery3ViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/Nursery3ViewCommulative";
import PreNurseryViewCommulative from "./backoffice/AdminPanel/AdminDashboard/AdminCommulative/PreNurseryViewCommulative";
import { AdminUserPreNurseryCommulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserPresNurseryCommulative";
import { AdminUserNursery1Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserNursery1Commulative";
import { AdminUserNursery2Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserNursery2";
import { AdminUserNursery3Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserNursery3Commulative";
import { AdminUserBasic1Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserBasic1Commulative";
import { AdminUserBasic2Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserBasic2Commulative";
import { AdminUserBasic3Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserBasic3Commulative";
import { AdminUserBasic4Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserBasic4Commulative";
import { AdminUserBasic5Commulative } from "./backoffice/AdminPanel/AdminDashboard/AdminUserCommulative/AdminUserBasic5Commulative";
import SelectResultType from "./screens/CheckResult/SelectResultType";
import CheckCommulative from "./screens/CheckResult/CheckCommulative";
import CheckNursery1Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckNursery1Commulative";
import CheckNursery2Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckNursery2Commulative";
import CheckNursery3Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckNursery3Commulative";
import CheckPreNurseryCommulative from "./screens/CheckResult/CheckCommulativeClasses/CheckPreNurseryCommulative";
import CheckBasic1Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckBasic1Commulative";
import CheckBasic2Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckBasic2Commulative";
import CheckBasic3Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckBasic3Commulative";
import CheckBasic4Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckBasic4Commulative";
import CheckBasic5Commulative from "./screens/CheckResult/CheckCommulativeClasses/CheckBasic5Commulative";
import { ViewPreNurseryCommulative } from "./screens/ViewCommulative/ViewPreNurseryCommulative";
import { ViewNursery1Commulative } from "./screens/ViewCommulative/ViewNursery1Commulative";
import { ViewNursery2Commulative } from "./screens/ViewCommulative/ViewNursery2Commulative";
import { ViewNursery3Commulative } from "./screens/ViewCommulative/ViewNursery3Commulative";
import { ViewBasic1Commulative } from "./screens/ViewCommulative/ViewBasic1Commulative";
import { ViewBasic2Commulative } from "./screens/ViewCommulative/ViewBasic2Commulative";
import { ViewBasic3Commulative } from "./screens/ViewCommulative/ViewBasic3Commulative";
import { ViewBasic4Commulative } from "./screens/ViewCommulative/ViewBasic4Commulative";
import { ViewBasic5Commulative } from "./screens/ViewCommulative/ViewBasic5Commulative";
import CreateClasses from "./backoffice/AdminPanel/AdminClasses/CreateClasses/CreateClasses";
import GetClasses from "./backoffice/AdminPanel/AdminClasses/GetClasses/GetClasses";
import UpdateClasses from "./backoffice/AdminPanel/AdminClasses/UpdateClasses/UpdateClass";
import UpdateBasic1CumulativeResult from "./backoffice/AdminPanel/UpdateCommulativeResult/UpdateBasic1Commulative";

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
        <Route path="/select-result-type" element={<SelectResultType />} />
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
        <Route path="/basic5" element={<Basic5students />} />
        <Route path="/basic6" element={<Basic6students />} />
        {/* Classes */}
        <Route path="/createClass" element={<CreateClasses />} />
        <Route path="/getClasses" element={<GetClasses />} />
        <Route path="/update-class/:id" element={<UpdateClasses />} />
        {/* classes */}
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
        <Route path="/basic5Result" element={<AdminBasic5Result />} />
        <Route path="/basic6Result" element={<AdminBasic6Result />} />
        {/* /////// */}
        <Route
          path="/post-nursery1result/:id"
          element={<InputNursery1result />}
        />
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
        <Route path="/post-basic5result/:id" element={<InputBasic5Result />} />
        <Route path="/post-basic6result/:id" element={<InputBasic6Result />} />
        {/* result checker routes */}
        <Route path="/PreNursery-result" element={<CheckPreNursery />} />
        <Route path="/Nursery2-result" element={<CheckNursery2Result />} />
        <Route path="/Nursery3-result" element={<CheckNursery3Result />} />
        <Route path="/Basic1-result" element={<CheckBasic1Result />} />
        <Route path="/Basic2-result" element={<CheckBasic2Result />} />
        <Route path="/Basic3-result" element={<CheckBasic3Result />} />
        <Route path="/Basic4-result" element={<CheckBasic4Result />} />
        <Route path="/Basic5-result" element={<CheckBasic5Result />} />
        <Route path="/Basic6-result" element={<CheckBasic6Result />} />
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
        />{" "}
        <Route
          path="/my-results-basic5/:selectedYear/:userId/:selectedTerm"
          element={
            <div>
              <ViewBasic5Result />
            </div>
          }
        />
        <Route
          path="/my-results-basic6/:selectedYear/:userId/:selectedTerm"
          element={
            <div>
              <ViewBasic6Result />
            </div>
          }
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
        <Route
          path="/view-basic5-student-result-update/:id"
          element={<UpdateBasic5Result />}
        />
        <Route
          path="/view-basic6-student-result-update/:id"
          element={<UpdateBasic6Result />}
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
        <Route
          path="/view-basic5-student-result/:id"
          element={<AdminUserBasic5Result />}
        />
        <Route
          path="/view-basic6-student-result/:id"
          element={<AdminUserBasic6Result />}
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
        {/* Update result field by admin */}
        <Route
          path="/view-prenursery-student-result-update-field/:id"
          element={<UpdatePreNurseryResultField />}
        />
        <Route
          path="/view-nursery1-student-result-update-field/:id"
          element={<UpdateNursery1ResultField />}
        />
        <Route
          path="/view-nursery2-student-result-update-field/:id"
          element={<UpdateNursery2ResultField />}
        />
        <Route
          path="/view-nursery3-student-result-update-field/:id"
          element={<UpdateNursery3ResultField />}
        />
        <Route
          path="/view-basic1-student-result-update-field/:id"
          element={<UpdateBasic1ResultField />}
        />
        <Route
          path="/view-basic2-student-result-update-field/:id"
          element={<UpdateBasic2ResultField />}
        />
        <Route
          path="/view-basic3-student-result-update-field/:id"
          element={<UpdateBasic3ResultField />}
        />
        <Route
          path="/view-basic4-student-result-update-field/:id"
          element={<UpdateBasic4ResultField />}
        />
        <Route
          path="/view-basic5-student-result-update-field/:id"
          element={<UpdateBasic5ResultField />}
        />
        <Route
          path="/view-basic6-student-result-update-field/:id"
          element={<UpdateBasic6ResultField />}
        />
        {/* Update result by admin */}
        {/* commulative result */}
        <Route
          path="/post-basic1commulative/:id"
          element={<InputBasic1Commulative />}
        />
        <Route
          path="/post-basic2commulative/:id"
          element={<InputBasic2Commulative />}
        />
        <Route
          path="/post-basic3commulative/:id"
          element={<InputBasic3Commulative />}
        />
        <Route
          path="/post-basic4commulative/:id"
          element={<InputBasic4Commulative />}
        />
        <Route
          path="/post-basic5commulative/:id"
          element={<InputBasic5Commulative />}
        />
        <Route
          path="/post-prenursery-commulative/:id"
          element={<InputPreNurseryCommulative />}
        />
        <Route
          path="/post-nursery1commulative/:id"
          element={<InputNursery1Commulative />}
        />
        <Route
          path="/post-nursery2commulative/:id"
          element={<InputNursery2Commulative />}
        />
        <Route
          path="/post-nursery3commulative/:id"
          element={<InputNursery3Commulative />}
        />
        {/* view commulative */}
        <Route
          path="/pre-nursery-view-commulative"
          element={<PreNurseryViewCommulative />}
        />
        <Route
          path="/nusery1-view-commulative"
          element={<Nursery1ViewCommulative />}
        />
        <Route
          path="/nusery2-view-commulative"
          element={<Nursery2ViewCommulative />}
        />
        <Route
          path="/nusery3-view-commulative"
          element={<Nursery3ViewCommulative />}
        />
        <Route
          path="/basic1-view-commulative"
          element={<Basic1ViewCommulative />}
        />
        <Route
          path="/basic2-view-commulative"
          element={<Basic2ViewCommulative />}
        />
        <Route
          path="/basic3-view-commulative"
          element={<Basic3ViewCommulative />}
        />
        <Route
          path="/basic4-view-commulative"
          element={<Basic4ViewCommulative />}
        />
        <Route
          path="/basic5-view-commulative"
          element={<Basic5ViewCommulative />}
        />
        {/* ////comulative student result admin */}
        <Route
          path="/view-prenursery-student-commulative/:id"
          element={<AdminUserPreNurseryCommulative />}
        />
        <Route
          path="/view-nursery1-student-commulative/:id"
          element={<AdminUserNursery1Commulative />}
        />
        <Route
          path="/view-nursery2-student-commulative/:id"
          element={<AdminUserNursery2Commulative />}
        />
        <Route
          path="/view-nursery3-student-commulative/:id"
          element={<AdminUserNursery3Commulative />}
        />
        <Route
          path="/view-basic1-student-commulative/:id"
          element={<AdminUserBasic1Commulative />}
        />
        <Route
          path="/view-basic2-student-commulative/:id"
          element={<AdminUserBasic2Commulative />}
        />
        <Route
          path="/view-basic3-student-commulative/:id"
          element={<AdminUserBasic3Commulative />}
        />
        <Route
          path="/view-basic4-student-commulative/:id"
          element={<AdminUserBasic4Commulative />}
        />
        <Route
          path="/view-basic5-student-commulative/:id"
          element={<AdminUserBasic5Commulative />}
        />
        {/* Commulative result */}
        {/* user side  commulative */}
        <Route path="/check-commulative" element={<CheckCommulative />} />
        <Route
          path="/Nursery1-commulative"
          element={<CheckNursery1Commulative />}
        />
        <Route
          path="/Nursery2-commulative"
          element={<CheckNursery2Commulative />}
        />
        <Route
          path="/Nursery3-commulative"
          element={<CheckNursery3Commulative />}
        />
        <Route
          path="/PreNursery-commulative"
          element={<CheckPreNurseryCommulative />}
        />
        <Route
          path="/Basic1-commulative"
          element={<CheckBasic1Commulative />}
        />
        <Route
          path="/Basic2-commulative"
          element={<CheckBasic2Commulative />}
        />
        <Route
          path="/Basic3-commulative"
          element={<CheckBasic3Commulative />}
        />
        <Route
          path="/Basic4-commulative"
          element={<CheckBasic4Commulative />}
        />
        <Route
          path="/Basic5-commulative"
          element={<CheckBasic5Commulative />}
        />
        {/* ////user main commulative result view */}
        <Route
          path="/my-results-prenurseryCommulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewPreNurseryCommulative />}
        />
        <Route
          path="/my-results-nursery1Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewNursery1Commulative />}
        />
        <Route
          path="/my-results-nursery2Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewNursery2Commulative />}
        />
        <Route
          path="/my-results-nursery3Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewNursery3Commulative />}
        />
        <Route
          path="/my-results-basic1Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic1Commulative />}
        />
        <Route
          path="/my-results-basic2Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic2Commulative />}
        />
        <Route
          path="/my-results-basic3Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic3Commulative />}
        />
        <Route
          path="/my-results-basic4Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic4Commulative />}
        />
        <Route
          path="/my-results-basic5Commulative/:selectedYear/:userId/:selectedTerm"
          element={<ViewBasic5Commulative />}
        />
        {/* ////update basic1result */}
        <Route
          path="/view-basic1-student-commulative-update/:id"
          element={<UpdateBasic1CumulativeResult />}
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
