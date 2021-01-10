import React, { useEffect, useRef } from "react";

import centralpark from "../../images/nyc/central-park.jpg";

import HomePageNavigation from "../navigation/homePageNavigation";
import animation from "../../images/lottie/confetti.json";

import lottie from "lottie-web";

export default function Homepage() {
  return (
    <div className="home-base">
      <img src={centralpark} className="home-base-img" />
      <HomePageNavigation className="home-base-nav" />
    </div>
  );
}
