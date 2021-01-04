import React from 'react';

import centralpark from '../../images/nyc/central-park.jpg'

import HomePageNavigation from '../navigation/homePageNavigation';

export default function Homepage() {
  return (
    <div className='home-base'>
      <img src={centralpark} className='home-base-img' />
      <HomePageNavigation className='home-base-nav' />
    </div>
  );
}