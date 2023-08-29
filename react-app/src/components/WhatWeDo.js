import React from "react";
import "../bulma/css/bulma.min.css";
import "../App.css";
import WebDevIcon from "../images/Web Dev Icon.svg";
import UxIcon from "../images/UX Icon.svg";
import AppDevIcon from "../images/App Dev Icon.svg";
import BlockchainIcon from "../images/Blockchain Icon.svg";

function WhatWeDo() {
  return (
    <div>
      <div class="column">
        <div>
          <div className="Rectangle WhatWeDoColummn"> </div>
          <div className="font_WhatWeDo1 WhatWeDoColummn_Title">
            <p>What We Do</p>
          </div>
          <div className="font_WhatWeDo WhatWeDoColummn_Text">
            <p>
              We offer a complete range of bespoke design and development
              services to help you turn your ideas into digital masterpieces
            </p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column WhatWeDoColummnServicesLeft">
          <div>
            <p>
              <img
                className="IconCss"
                src={WebDevIcon}
                width="64px"
                height="64px"
                alt="Web development"
              ></img>
            </p>
          </div>
          <div className="Text24Bold IconHeading">Web development</div>
          <p className="TextRegular20 IconTextContainer">
            We use cutting-edge web development technologies to help our clients
            fulfill their business goals through functional, reliable solutions.
          </p>
        </div>

        <div class="column WhatWeDoColummnServicesCenter">
          <div>
            <p>
              <img
                className="IconCss"
                src={UxIcon}
                width="64px"
                height="64px"
                alt="User experience and design"
              ></img>
            </p>
          </div>
          <div className="Text24Bold IconHeading">User experience & design</div>
          <p className="TextRegular20 IconTextContainer">
            Our complete web design services will bring your ideas to life and
            provide you with a sleek, high-performing product that elevates your
            business.
          </p>
        </div>

        <div class="column WhatWeDoColummnServicesCenter">
          <div>
            <p>
              <img
                className="IconCss"
                src={AppDevIcon}
                width="64px"
                height="64px"
                alt="Mobile app development"
              ></img>
            </p>
          </div>
          <div className="Text24Bold IconHeading">Mobile app development</div>
          <p className="TextRegular20 IconTextContainer">
            Our extensive mobile development experience allows us to create
            custom native and cross-platform iOS and Android mobile solutions
            for our clients.
          </p>
        </div>
        <div class="column WhatWeDoColummnServicesRight">
          <div>
            <p>
              <img
                className="IconCss"
                src={BlockchainIcon}
                width="64px"
                height="64px"
                alt="Blockchain solutions"
              ></img>
            </p>
          </div>
          <div className="Text24Bold IconHeading">Blockchain solutions</div>
          <p className="TextRegular20 IconTextContainer">
            We conduct market research to determine the optimal blockchain-based
            solutions to help you grow your company and achieve your business
            goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
