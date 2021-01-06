import React from 'react';
import PageNavigation from '../navigation/pagesNavigation';

import ariana from '../../images/ariana/glasses.jpg'
import arianaVid from '../../images/ariana/production.mp4'

export default function ArianaPage() {
  return (
<div className='ariana-container'>
      <div className="ariana-home-nav">
        <PageNavigation 
            className1='ariana_nav_class' 
            classNameNav='ariana_nav_class' 
            classNameContainer='ariana_nav_class' 
        />
      </div>
      <div className="ariana-image">
        <img className='ariana-image-img' src={ariana} />
      </div>
      <div className='ariana-hero' >
          <div className="ariana-link-left">
            <video className='ariana-vid' src={arianaVid} muted loop autoplay ></video>
            <a className='ariana-link' target="_blank" href={'https://www.johnariana.com/'}>Johnariana.com</a>
            <a className='ariana-link' target="_blank" href={'https://en.wikipedia.org/wiki/John_ariana'}>Wikipedia</a>
            <a className='ariana-link' target="_blank" href={'https://www.mixcloud.com/johnariana/'}>MixCloud</a>
            <a className='ariana-link' target="_blank" href={'https://soundcloud.com/john-ariana'}>SoundCloud</a>
            <a className='ariana-link' target="_blank" href={'https://www.residentadvisor.net/dj/ariana'}>ResidentAdvisor</a>
          </div>
          <div className="ariana-link-right">
            <a className='ariana-link' target="_blank" href={'https://www.johnariana.com/'}>Johnariana.com</a>
            <a className='ariana-link' target="_blank" href={'https://en.wikipedia.org/wiki/John_ariana'}>Wikipedia</a>
            <a className='ariana-link' target="_blank" href={'https://www.mixcloud.com/johnariana/'}>MixCloud</a>
            <a className='ariana-link' target="_blank" href={'https://soundcloud.com/john-ariana'}>SoundCloud</a>
            <a className='ariana-link' target="_blank" href={'https://www.residentadvisor.net/dj/ariana'}>ResidentAdvisor</a>
          </div>
      </div>
    </div>
  );
}