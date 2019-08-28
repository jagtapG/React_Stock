import React from "react";
import "./css/sidebar.css";
import Navbar from "./Navbar-Header";
import { A } from "./js/Sidebar1";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          <Navbar />
        </div>

        <div className="sidenav">
          <a href="#about">Material Entry</a>
          <a href="#services">Material Entry CSV</a>
          <a href="#clients">Issue Report Entry CSV</a>
          <a href="#contact">Usage</a>
          <button className="dropdown-btn" onClick={A}>
            Report
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-container">
            <a href="#">Central Store Report</a>
            <a href="#">Sub Store Report</a>
            <a href="#">Villa Report</a>
            <a href="#">Material Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
