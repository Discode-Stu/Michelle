import React, { useEffect, useRef } from "react";

import centralpark from "../../images/nyc/central-park.jpg";

import HomePageNavigation from "../navigation/homePageNavigation";
import animation from "../../images/lottie/confetti.json";

import lottie from "lottie-web";

export default function Homepage() {
  // const container = useRef(null);
  let animationContainer = React.createRef;
  React.useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      // path: "../../images/lottie/confetti.json",
      renderer: "json",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <div className="home-base">
      <img src={centralpark} className="home-base-img" />
      <HomePageNavigation className="home-base-nav" />
      <div className="animation-container" ref={animationContainer}></div>
    </div>
  );
}
