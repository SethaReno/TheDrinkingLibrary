import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Logo from "../../../static/images/logos/circular-logic-logo.jpg";

import Home from "../pages/home";
import CardForm from "../infoForm";
import Contact from "../pages/contact";
import Auth from "../pages/login";

const NavBar = () => {
  return (
    <BrowserRouter>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="top-navbar">
            <div className="h1-wrapper">
              <h1>USERNAME</h1>
            </div>
          </div>
          <div className="bottom-navbar">
            <div className="right-side">
              <div className="logo-wrapper">
                <img src={Logo} alt="Doughnut Logo" />
              </div>
            </div>

            <div className="left-side">
              <div className="links-wrapper">
                <div className="link-wrapper">
                  <Link exact to="/">
                    DRINKS LIBRARY
                  </Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/form">ADD DRINK</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/contact">CONTACT</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/auth">LOGIN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={CardForm} />
          <Route path="/contact" component={Contact} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <div className="footer-wrapper">
          <div className="links-wrapper">
            <div className="link-wrapper">
              <Link exact to="/">
                DRINKS LIBRARY
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/form">ADD DRINK</Link>
            </div>
            <div className="link-wrapper">
              <Link to="/contact">CONTACT</Link>
            </div>
            <div className="link-wrapper">
              <Link to="/auth">LOGIN</Link>
            </div>
          </div>
          <div className="copyright-wrapper">
            <h1>COPYRIGHT</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
