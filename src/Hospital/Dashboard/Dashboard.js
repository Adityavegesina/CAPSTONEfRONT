import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#E0E7FF" }}>
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <div className="logo" style={{ maxHeight: "1%" }}>
          <h2>HELPCARE</h2>
        </div>
        <ul className="nav-links" style={{}}>
          <li className="navLinksStyle">
            <a href="#">Home</a>
          </li>
          <li className="navLinksStyle">
            <a href="#">DoctorList</a>
          </li>
          <li className="navLinksStyle">
            <a href="#">Patient List</a>
          </li>
          <li className="navLinksStyle">
            <a href="#">Diagnostic</a>
          </li>
          <li className="navLinksStyle">
            <a href="/hospitalregister">Register</a>
          </li>
          <li className="navLinksStyle">
            <a href="/hospitallogin">Login</a>
          </li>
        </ul>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#E0E7FF",
          paddingTop: "100px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              marginTop: "200px",
              marginLeft: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link to="/doctor">
              <button className="btn1" style={{ margin: "40px" }}>
                Doctor
              </button>
            </Link>
            <Link to="/reception">
              {" "}
              <button className="btn" style={{ backgroundColor: "#1434A4" }}>
                Reception
              </button>
            </Link>
          </div>
        </div>
        <img src="hospital_dashboard.jpg" style={{ left: "100px" }} />
      </div>
    </div>
  );
};

export default Dashboard;
