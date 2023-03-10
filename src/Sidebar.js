import React from 'react'
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <hr className="sidebar-divider my-0"></hr>

    <li className="nav-item active">
        <Link className="nav-link" to="/user">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Users</span></Link>
    </li>

    <hr className="sidebar-divider"></hr>

<li className="nav-item active">
    <Link className="nav-link" to="/student">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Student</span></Link>
</li>

<hr className="sidebar-divider"></hr>

<li className="nav-item active">
    <Link className="nav-link" to="/faculty">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Faculty</span></Link>
</li>

    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

 
    <div className="sidebar-card d-none d-lg-flex">
        <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."></img>
        <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
        <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
    </div>

</ul>
  )
}

export default Sidebar