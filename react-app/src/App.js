import "./App.css";
import "./bulma/css/bulma.min.css";
import NavBar from "./components/NavBar";
import WhatWeDo from "./components/WhatWeDo";
import HeroJM from "./components/Hero";
import CaseStudiesSlider from "./components/CaseStudiesSlider";
import FooterJS from "./components/Footer";
import TrustedLeadingBrandsAPI from "./components/TrustedLeadingBrandsAPI";

const App = () => {
  return (
    <div>
      <div>
        <header>
          <NavBar />
        </header>
        <body>
          <HeroJM />
          <WhatWeDo />
          <CaseStudiesSlider />
          <TrustedLeadingBrandsAPI />
        </body>
        <footer>
          <FooterJS />
        </footer>
      </div>
    </div>
  );
};

export default App;
