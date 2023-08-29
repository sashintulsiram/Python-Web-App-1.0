import React from "react";
import "../bulma/css/bulma.min.css";
import "../App.css";

function HeroJM() {
  return (
    <div>
      <section class="hero has-bg-img">
        <div class="hero-body">
          <p className="HeadingMain">Live with Confidence</p>
          <p className="TextRegular20_Hero">
            José Mourinho brings confidence to pan-African Sanlam campaign
          </p>
          <p>
            <button class="button is-rounded" className="btn_jm">
              <span>View Project</span>
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}

export default HeroJM;
