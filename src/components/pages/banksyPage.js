import React, { useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";

import animationData from "../../images/lottie/confetti.json";

import Lottie from "react-lottie";

import alice from "../../images/banksy/alice.jpg";
import bars from "../../images/banksy/bars.jpg";
import birds from "../../images/banksy/birds.jpg";
import einstein from "../../images/banksy/einstein.jpg";
import bluesbrother from "../../images/banksy/bluesbrother.jpg";
import banksyLogo from "../../images/banksy/banksy-logo.png";
import camera from "../../images/banksy/camera.png";
import flowers from "../../images/banksy/flowers.png";
import faster from "../../images/banksy/faster.png";
import slower from "../../images/banksy/slower.png";

import michelle1 from "../../images/banksy/michelle1.jpeg";
import michelle2 from "../../images/banksy/michelle2.jpeg";
import michelle3 from "../../images/banksy/michelle3.jpeg";
import michelle4 from "../../images/banksy/michelle4.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BanksyPage() {
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [speed, setSpeed] = useState(1);
  return (
    <div className="banksy-container">
      <div className="banksy-background-header" />
      <div className="banksy-images-container">
        <div>
          <img className="banksy-image" src={michelle1} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={michelle4} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={michelle3} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={michelle2} alt="alice" />
        </div>
        <div>
          <div className="banksy-more-to-come">More to come...</div>
        </div>
        {/* <div>
          <img className="banksy-image" src={alice} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={bars} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={birds} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={einstein} alt="alice" />
        </div>
        <div>
          <img className="banksy-image" src={bluesbrother} alt="alice" />
        </div> */}
        {/* <img className="banksy-image" src={alice} alt="alice"/> */}
      </div>
      <div className="banksy-lottie-container">
        <Lottie
          width={600}
          height={400}
          isPaused={paused}
          isStopped={stopped}
          speed={speed}
          options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidVMid slice",
            },
          }}
        />
      </div>
      <div className="banksy-lottie-buttons">
        <div className="banksy-button-left">
          <div className="banksy-stop-container">
            <img
              className="banksy-controller-image"
              onClick={() => setStopped(!stopped)}
              src={camera}
              alt="camera"
            />
            <div className="banksy-controller-text">
              {stopped ? (
                <FontAwesomeIcon
                  onClick={() => setStopped(!stopped)}
                  className="banksy-action-buttons"
                  icon="play-circle"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => setStopped(!stopped)}
                  className="banksy-action-buttons"
                  icon="stop-circle"
                />
              )}
            </div>
          </div>
          <div className="banksy-pause-container">
            <img
              className="banksy-controller-image"
              src={flowers}
              onClick={() => setPaused(!paused)}
              alt="flowers"
            />
            <div className="banksy-controller-text">
              {!paused ? (
                <FontAwesomeIcon
                  onClick={() => setPaused(!paused)}
                  className="banksy-action-buttons"
                  icon="pause-circle"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={() => setPaused(!paused)}
                  className="banksy-action-buttons"
                  icon="play-circle"
                />
              )}
            </div>
          </div>
        </div>
        <div className="banksy-button-center">
          <div className="banksy-image-1">
            <NavLink exact to='/'>
              <img className="banksy-image-1" src={banksyLogo} alt="alice" />
            </NavLink>
          </div>
        </div>
        <div className="banksy-button-right">
          <div className="banksy-faster-container">
            <img
              className="banksy-controller-image banksy-faster"
              src={faster}
              onClick={() => setSpeed(speed + 1)}
              alt="faster"
            />
            <div className="banksy-controller-text banksy-faster">
              {" "}
              <FontAwesomeIcon
                onClick={() => setSpeed(speed + 1)}
                className="banksy-action-buttons"
                icon="fast-forward"
              />
            </div>
          </div>
          <div className="banksy-speed-container">
            <div
              onClick={() => setSpeed(1)}
              className="banksy-speed-limit"
            >
              <div className="banksy-lottie-speed">Speed</div>
              <div className="banksy-lottie-speed">Limit</div>
              <div className="banksy-lottie-speed">{speed}</div>
            </div>
          </div>
          <div className="banksy-slower-container">
            <img
              className="banksy-controller-image"
              src={slower}
              onClick={() => setSpeed(speed - 1)}
              alt="faster"
            />
            <div className="banksy-controller-text">
              {" "}
              <FontAwesomeIcon
                onClick={() => setSpeed(speed - 1)}
                className="banksy-action-buttons"
                icon="fast-backward"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
