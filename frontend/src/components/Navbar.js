import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white1.png";

 const Navbar = ({selectedGame, selectGame}) => {
  var nav = document.getElementsByClassName("_floating");
  window.onscroll = function sticky() {
    if(window.pageYOffset > nav[0].offsetTop) {
      nav[0].classList.add("navCustom");
    } else {
      nav[0].classList.remove("navCustom");
    }
  }
  
  const handleChange = e => {
    selectGame({
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="navbar-dark text-white _floating">
      <div className="container">
        <nav className="navbar px-0 navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control _searchFormControl"
                name="gameName"
                placeholder="Search"
                onChange={handleChange}
              ></input>
              <div className="_mainSignUp">
                <Link to="/Contact">Contact</Link>
              </div>
              <div className="_tasteBox"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
