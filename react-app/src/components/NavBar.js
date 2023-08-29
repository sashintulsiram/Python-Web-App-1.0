import React from "react";
import logo from "../images/logo.svg";
import "../bulma/css/bulma.min.css";

function NavBar() {
  return (
    <div>
      <div>
        <nav class="navbar" className="BG_css">
          <div class="navbar-brand">
            <p class="navbar-item Navbar_logo_position" href="">
              <img src={logo} width="100px" height="30px" alt="Logo"></img>
            </p>

            <p
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </p>

            <div class="navbar-menu">
              <div class="navbar-start Navbar_menu_position">
                <div class="navbar-item">
                  <button class="button is-rounded" className="btn_menu">
                    <span>Services</span>
                  </button>
                </div>
                <p class="navbar-item">
                  <button class="button is-rounded" className="btn_menu">
                    <span>Industries</span>
                  </button>
                </p>
                <p class="navbar-item">
                  <button class="button is-rounded" className="btn_menu">
                    <span>Cases</span>
                  </button>
                </p>
                <p class="navbar-item">
                  <button class="button is-rounded" className="btn_menu">
                    <span>Contact</span>
                  </button>
                </p>
              </div>
              <div>
                <div class="navbar-end Navbar_lets_talk_position">
                  <p class="navbar-item">
                    <button
                      class="button is-rounded"
                      className="btn_menu_lets_talk"
                    >
                      <span>Let's Talk</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;
