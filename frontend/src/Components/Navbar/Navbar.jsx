//import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu from "../../../assets/menu.png";

import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenuu, setMobileMenu] = useState(false);
  const toogleMenu = () => {
    mobileMenuu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "darkNav" : ""}`}>
        <img src={logo} alt="" className="logo"></img>
        <ul className="navBarList" className={mobileMenuu ? "" : "mobileMenu"}>
          <li>
            <Link to="Background" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="Programs" smooth={true} offset={-260} duration={500}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <button className="btn">
              <Link to="contactus" smooth={true} offset={-260} duration={500}>
                Contact us
              </Link>
            </button>
          </li>
        </ul>
        <img src={menu} className="menuIcon" onClick={toogleMenu}></img>
      </nav>
    </>
  );
};

export default Navbar;
