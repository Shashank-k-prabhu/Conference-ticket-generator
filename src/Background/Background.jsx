import React from "react";
import bgDesk from "../assets/images/background-desktop.png";
import bgMob from "../assets/images/background-mobile.png";
import bgTab from "../assets/images/background-tablet.png";
import squiglyLineBottomDesk from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import squiglyLineBottomMob from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import squiglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternLines from "../assets/images/pattern-lines.svg";
import patternCircles from "../assets/images/pattern-circle.svg";
const Background = () => {
  return (
    <div className="h-screen">
      <img
        src={bgDesk}
        alt="Background Desktop"
        className="hidden lg:block w-full h-full object-cover"
      />
      <img
        src={bgTab}
        alt="Background Tablet"
        className="hidden md:block lg:hidden w-full h-full object-cover"
      />
      <img
        src={bgMob}
        alt="Background Mobile"
        className="block md:hidden w-full h-full object-cover"
      />
      <img
        src={patternLines}
        alt="Pattern Lines"
        className=" absolute top-0 left-0 w-full h-full object-cover"
      />
      <img
        src={squiglyLineBottomDesk}
        alt="Squiggly Line Bottom Desktop"
        className="hidden lg:block absolute bottom-0 left-0  h-auto"
      />
      <img
        src={squiglyLineBottomMob}
        alt="Squiggly Line Bottom Mobile"
        className="lg:hidden absolute bottom-0 left-0 w-3/4 md:w-2/3 h-auto"
      />
      <img
        src={squiglyLineTop}
        alt="Squiggly Line Top"
        className="absolute top-20 lg:top-30 right-0 w-2/5 lg:w-1/4 h-auto"
      />
      <img
        src={patternCircles}
        alt="Pattern Circles"
        className="absolute top-7/10 lg:top-1/2 right-1/5 w-1/3 md:w-1/5 lg:w-[15%] h-auto"
      />
    </div>
  );
};

export default Background;
