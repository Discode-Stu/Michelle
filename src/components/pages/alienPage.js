import React from 'react';
import PageNavigation from '../navigation/pagesNavigation'
import alien1 from '../../images/alien/alien-face.jpg';

import { Link } from 'react-router-dom';


export default function  AlienPage() {
  return (
    <div className='alien-container'>
      <div className='alien-nav'>
        <PageNavigation 
          className1='alien_nav_class' 
          classNameNav='alien_nav_class' 
          classNameContainer='alien_nav_class' />
      </div>
      <div className='alien-body'>
          <img className='alien-body-img' src={alien1} />
          <a className='alien-body-link' href={'https://www.google.com'}>Google</a>
          {/* <a></a>
          <a></a>
          <a></a> */}

      </div>
    </div>

  );
}