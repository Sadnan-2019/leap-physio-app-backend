import React from "react";
import physio from "../../assets/physio.png";
import patients from "../../assets/patients.png";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <div>
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" class="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
          />
          <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div class="sidebar">
         

          <nav class="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
             
              <li class="nav-item">
                <a href="#" class="nav-link">
                  {/* <i class="nav-icon fas fa-chart-pie"></i> */}
                  <img
                    style={{ width: "25px", color: "red" }}
                    src={physio}
                    alt=""
                  />

                  <p>
                    Physiotherapy
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-physio" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Physiotherapist</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-physio" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Physiotherapist </p>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                   
                  <img src={patients} alt="" />
                  <p>
                    Patients
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-patients" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Patients </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-patients" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Patients </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                   
                  <img src={patients} alt="" />
                  <p>
                    Appointment
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-appointment" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Appointment </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-appointment" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Appointment </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                   
                  <img src={patients} alt="" />
                  <p>
                    Doctor
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-doctor" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Doctor </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-doctor" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Doctor </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-edit"></i>
                  <p>
                    Service
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-service" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Service </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-service" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Service </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-edit"></i>
                  <p>
                  Attendance
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/add-attendance" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add Attendance </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/manage-attendance" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Attendance </p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-edit"></i>
                  <p>
                  Billing
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to="/billing" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Report </p>
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <Link to="/manage-attendance" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Manage Attendance </p>
                    </Link>
                  </li> */}
                </ul>
              </li>
              
            </ul>
          </nav>
        </div>
      </aside>

      {/* <!-- Content Wrapper. Contains page content --> */}
    </div>
  );
};

export default Aside;
