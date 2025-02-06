import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container-fluid nav-cont">
        <div className="nav-child1">
          <Link className="navbar-brand" to="/">
            <img className="logo logo1" src="nova.svg" alt="" />
            <img className="logo logo2" src="tire.svg" alt="" />
          </Link>
        </div>

        <div className="nav-child2a">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#/navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vehicles">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-child2b">
          <div
            className={`hamburger-icon ${isNavOpen && "gap"}`}
            id="icon"
            onClick={toggleNav}
          >
            <div className={`icon-1 ${isNavOpen && "a"}`} id="a"></div>
            <div className={`icon-2 ${isNavOpen && "c"}`} id="b"></div>
            <div className={`icon-3 ${isNavOpen && "b"}`} id="c"></div>
          </div>

          <div id="nav" className={isNavOpen ? "show" : ""}>
            <ul className="ul">
              <li className="li li1">
                <Link to="/">Home</Link>
              </li>
              <li className="li li2">
                <Link to="/vehicles">Vehicles</Link>
              </li>
              <li className="li li3">
                <Link to="/about">About</Link>
              </li>
              <li className="li li4">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="li li5">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="li">
                <button className="sign">Sign up &gt;</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-child3">
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              padding: "5px 1rem",
              maxWidth: "100px",
              fontSize: "14px",
              textTransform: "capitalize",
              color: "#000000",
              border: "2px solid #222a2f",
              "&:hover": {
                backgroundColor: "#222a2f",
                color: "white",
                border: "2px solid #222a2f",
              },
            }}
          >
            Sign Up
          </Button>
          <div>
            <i className="fa-regular fa-circle-user account"></i>
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
