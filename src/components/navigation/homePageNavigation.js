import React from "react";
import saucer from "../../images/alien/saucer.png";
import galaxy from "../../images/universe/spiral-galaxy.jpg";
import ariana from "../../images/ariana/pinkAriana.jpg";
import digweed from "../../images/digweed/psycadelic-digweed.png";
import einstein from "../../images/banksy/einstein.jpg";

import { NavLink } from "react-router-dom";

export default function HomePageNavigation() {
  return (
    <div className="nav-container">
      <div className="nav-home">
        <NavLink
          exact
          to="/"
          className="home-base-title"
          activeClassName="nav-link-active"
        >
          Mich Elle
        </NavLink>
      </div>
      <div className="nav-alien">
        <NavLink
          to="/alien"
          className="nav-alien-link"
          activeClassName="nav-link-active"
        >
          <img className="nav-alien-img" src={saucer} />
        </NavLink>
      </div>
      <div className="nav-ariana">
        <NavLink
          to="/ariana"
          className="nav-ariana-link"
          activeClassName="nav-link-active"
        >
          <img src={ariana} className="nav-ariana-img" />
        </NavLink>
      </div>
      <div className="nav-banksy">
        <NavLink to="/banksy" activeClassName="nav-link-active">
          <img src={einstein} className="nav-banksy-einstein-img" />
        </NavLink>
      </div>
      {/* <div className="nav-blog">
        <NavLink  to ="/blog" activeClassName="nav-link-active">
        blog
        </NavLink>
      </div> */}
      <div className="nav-digweed">
        <NavLink
          to="/digweed"
          className="nav-digweed-link"
          activeClassName="nav-link-active"
        >
          <img src={digweed} className="nav-digweed-img" />
        </NavLink>
      </div>
      <div className="nav-universe">
        <NavLink
          to="/universe"
          className="nav-universe-link"
          activeClassName="nav-link-active"
        >
          <img className="nav-universe-img" src={galaxy} />
        </NavLink>
      </div>
    </div>
  );
}
