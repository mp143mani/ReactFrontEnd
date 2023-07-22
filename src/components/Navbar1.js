import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Welcome.css";

export default function Navbar1() {
  const auth = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleBeforeLogin = async () => {
    navigate("/loginBefore");
  };

  const handleRegister = async () => {
    navigate("/Register");
  };

  const handleBeforeLogout = async () => {
    localStorage.clear();
    navigate("/loginBefore");
  };

  return (
    <div id="content">
      {/* Topbar */}
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top" style={{ color: "white" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="ms-auto"> {/* Use ms-auto class to align the div to the right */}
            {auth ? (
              <button className="btn btn-primary me-2" onClick={handleBeforeLogout}>
                LOG OUT
              </button>
            ) : (
              <button className="btn btn-primary me-2" onClick={handleBeforeLogin}>
                LOG IN
              </button>
            )}
            <button className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
