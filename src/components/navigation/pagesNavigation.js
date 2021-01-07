import React from "react";
import saucer from "../../images/alien/saucer.png";
import galaxy from "../../images/universe/spiral-galaxy.jpg";
import ariana from "../../images/ariana/pinkAriana.jpg";
import digweed from "../../images/digweed/psycadelic-digweed.png";
import einstein from "../../images/banksy/einstein.jpg";

import { NavLink } from "react-router-dom";

export default function PageNavigation({ ...props }) {
  return (
    <div className={props.classNameContainer}>
      <div className={props.classNameNav}>
        <NavLink
          exact
          to="/"
          className={props.className1}
          activeClassName="nav-link-active"
        >
          Home
        </NavLink>
      </div>
      {/* <div className="page-nav-alien">
        <NavLink  to ="/alien" className='page-nav-alien-link' activeClassName="nav-link-active">
          <img className='page-nav-alien-img' src={saucer} />
        </NavLink>
      </div>
      <div className="page-nav-ariana">
        <NavLink  to ="/ariana" className='page-nav-ariana-link' activeClassName="nav-link-active">
          <img src={ariana} className='page-nav-ariana-img' />
        </NavLink>
      </div>
      <div className="page-nav-banksy">
        <NavLink  to ="/banksy" activeClassName="page-nav-link-active">
          <img src={einstein} className='page-nav-banksy-img' />
        </NavLink>
      </div>
      {/* <div className="nav-blog">
        <NavLink  to ="/blog" activeClassName="nav-link-active">
        blog
        </NavLink>
      </div> */}
      {/* <div className="page-nav-digweed">
        <NavLink  to ="/digweed" className='page-nav-digweed-link' activeClassName="nav-link-active">
          <img src={digweed} className='page-nav-digweed-img' />
        </NavLink>
      </div>
      <div className="page-nav-universe">
        <NavLink  to ="/universe" className='page-nav-universe-link' activeClassName="nav-link-active">
         <img  className='page-nav-universe-img' src={galaxy} />
        </NavLink> */}
      {/* </div> */}
    </div>
  );
}
