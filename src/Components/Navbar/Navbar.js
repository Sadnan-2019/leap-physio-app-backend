import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [signOut, signLoading, signError] = useSignOut(auth);
  // const logout = () => {
  //   signOut(auth);
  //   navigate("/login")
  // };
  return (
    <div>
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button">
              <i class="fas fa-bars"></i>
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            
            <Link to="/" class="nav-link">
                     
                      {/* <p>Manage Physiotherapist </p> */}
                      Home
                    </Link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i class="fas fa-search"></i>
            </a>
            <div class="navbar-search-block">
              <form class="form-inline">
                <div class="input-group input-group-sm">
                  <input
                    class="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                    <button
                      class="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

         

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              {/* <i class="far fa-bars"></i> */}
              {/* <i class="fa-regular fa-user"></i> */}
              <img style={{width:"50px"}} class="user-block img-circle img-bordered-sm" 
              src="../../dist/img/user1-128x128.jpg" alt="user image"/>

              
              <span class="badge badge-warning navbar-badge">Profile</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* <span class="dropdown-item dropdown-header">
                15 Notifications
              </span> */}
              <div class="dropdown-divider"></div>
              {/* <a href="#" class="dropdown-item">
                 
                <i class="fas fa-users mr-2"></i>Profile
              </a> */}
               
                    <Link to="/profile" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i>Profile
                      {/* <p>Manage Physiotherapist </p> */}
                    </Link>
                   
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i>Setting
                {/* <span class="float-right text-muted text-sm">12 hours</span> */}
              </a>
              <div class="dropdown-divider"></div>
              <Link  class="dropdown-item"    onClick={async () => {
          const success = await signOut();
          if (success) {
            navigate("/login");
          }
        }}>
                <i class="fas fa-file mr-2"></i> Logout
                {/* <span class="float-right text-muted text-sm">2 days</span> */}
              </Link>
              
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          {/* <li class="nav-item">
            <a
              class="nav-link"
              data-widget="control-sidebar"
              data-controlsidebar-slide="true"
              href="#"
              role="button"
            >
              <i class="fas fa-th-large"></i>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
