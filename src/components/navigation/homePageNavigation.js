import React from 'react';

import { NavLink } from 'react-router-dom';

export default function HomePageNavigation() {
  return (
    <div className='nav-container'>
      <div className="nav-home">
        <NavLink exact to ="/" activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>
      <div className="nav-alien">
        <NavLink  to ="/alien" activeClassName="nav-link-active">
        alien
        </NavLink>
      </div>
      <div className="nav-ariana">
        <NavLink  to ="/ariana" activeClassName="nav-link-active">
        ariana
        </NavLink>
      </div>
      <div className="nav-banksy">
        <NavLink  to ="/banksy" activeClassName="nav-link-active">
        banksy
        </NavLink>
      </div>
      <div className="nav-blog">
        <NavLink  to ="/blog" activeClassName="nav-link-active">
        blog
        </NavLink>
      </div>
      <div className="nav-digweed">
        <NavLink  to ="/digweed" className='nav-digweed-link' activeClassName="nav-link-active">
        digweed
        </NavLink>
      </div>
      <div className="nav-universe">
        <NavLink  to ="/universe" className='nav-universe-link' activeClassName="nav-link-active">
        universe
        </NavLink>
      </div>
    </div>
  );
}