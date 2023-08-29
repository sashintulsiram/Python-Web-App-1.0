import React from "react";
import "../bulma/css/bulma.min.css";
import "../App.css";

const FooterJS = () => {
  return (
    <div>
      <div className="BgCssFooter">
        <footer class="footer" className="BgCssFooter">
          <div class="column">
            <div>
              <div className="Rectangle FooterContainerRectangle"> </div>
              <div className="TextRegular20Footer FooterContainerTitle">
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column is-half" className="FooterContainerTextLeft">
                  <p class="FooterFont1">
                    <p>Have a project in mind?</p>
                    <p>Let's make it happen</p>
                  </p>
                </div>
                <div
                  class="column is-half"
                  className="FooterContainerAddrRight"
                >
                  <p class="FooterFont2">
                    <p>22 Street Name, Suburb, 8000,</p>
                    <p>Cape Town, South Africa</p>
                    <p>+27 21 431 0001</p>
                    <p className="FooterMail">enquirie@website.co.za</p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div
              class="column is-one-quarter"
              className="FooterContainerBottomLeft"
            >
              <p class="FooterFont2">
                <p>Terms of service</p>
                <p>Privacy policy</p>
                <p>Impressum</p>
              </p>
            </div>
            <div class="column" className="FooterContainerBottomCentre">
              <p class="FooterFont2">
                Facebook
                <br />
                Instagram
                <br />
                Twitter
                <br />
              </p>
            </div>
            <div class="column" className="FooterContainerBottomCentre">
              <p class="FooterFont2">
                Github
                <br />
                Linkedin
                <br />
                Teams
                <br />
              </p>
            </div>
            <div class="column" className="FooterContainerBottomCentre">
              <p class="FooterFont2">
                Youtube
                <br />
                Behance
                <br />
                Dribbble
                <br />
              </p>
            </div>
            <div class="column is-half" className="FooterContainerBottomRight">
              <p class="FooterFont2">
                Explore open jobs
                <br />
                <br />
                ©2000—2023 Company Name
                <br />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterJS;
