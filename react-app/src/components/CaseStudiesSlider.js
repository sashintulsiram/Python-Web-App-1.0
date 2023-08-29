import React from "react";
import "../bulma/css/bulma.min.css";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CaseStudiesSlider = () => {
  return (
    <div>
      <div class="column">
        <div className="Rectangle CaseColummn"> </div>
        <div className="font_WhatWeDo1 CaseColummn_Title">
          <p>Case Studies</p>
        </div>
        <div class="column">
          <Carousel className="CarouselSlider" showThumbs={false}>
            <div>
              <section class="hero has-bg-img-olympian">
                <div class="hero-body">
                  <div className="Rectangle CarouselIcon"> </div>
                  <p className="RegularText CarouselText1">The Olympian</p>
                  <p className="RegularTextCaseStudies CarouselText2">
                    The only athlete in the world to do her Olympic routine in
                    2020.
                  </p>
                </div>
              </section>
            </div>
            <div>
              <section class="hero has-bg-img-dragon">
                <div class="hero-body">
                  <div className="Rectangle CarouselIcon"> </div>
                  <p className="RegularText CarouselText1">The Savings Jar</p>
                  <p className="RegularTextCaseStudies CarouselText2">
                    Grow your savings treasure and grow your dragon.
                  </p>
                </div>
              </section>
            </div>
            <div>
              <section class="hero has-bg-img-skhokho">
                <div class="hero-body">
                  <div className="Rectangle CarouselIcon"> </div>
                  <p className="RegularText CarouselText1">Skhokho seMali</p>
                  <p className="RegularTextCaseStudies CarouselText2">
                    Helping South Africans become #CashCleva with Skhokho and
                    TymeBank.
                  </p>
                </div>
              </section>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSlider;

/*
function Case_Studies_Slider() {
  return (

  );
}

export default Case_Studies_Slider;
*/
