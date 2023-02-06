import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddPhysiotherapy from "./Components/Physiotherapy/AddPhysiotherapy";
import ManagePhysio from "./Components/Physiotherapy/ManagePhysio";
import AddPatients from "./Components/Patients/AddPatients";
import ManagePatients from "./Components/Patients/ManagePatients";
import AddService from "./Components/Service/AddService";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageService from "./Components/Service/ManageService";
import Profile from "./Components/Profile/Profile";
import AddDoctor from "./Components/Doctor/AddDoctor";
import ManageDoctor from "./Components/Doctor/ManageDoctor";
import Attendance from "./Components/Attendance/Attendance";
import ManageAttendance from "./Components/Attendance/ManageAttendance";

function App() {
  return (
    <div className="wrapper hold-transition sidebar-mini">
      <Navbar></Navbar>
      <Aside></Aside>

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-physio" element={<AddPhysiotherapy />}></Route>
        <Route path="/manage-physio" element={<ManagePhysio />}></Route>
        <Route path="/add-patients" element={<AddPatients />}></Route>
        <Route path="/manage-patients" element={<ManagePatients />}></Route>
        <Route path="/add-service" element={<AddService />}></Route>
        <Route path="/manage-service" element={<ManageService/>}></Route>
        <Route path="/add-doctor" element={<AddDoctor/>}></Route>
        <Route path="/manage-doctor" element={<ManageDoctor/>}></Route>
        <Route path="/add-attendance" element={<Attendance/>}></Route>
        <Route path="/manage-attendance" element={<ManageAttendance/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
