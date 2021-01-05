import React from 'react';
import PageNavigation from '../navigation/pagesNavigation';
import digweed from '../../images/digweed/black-digweed.png'

export default function DigweedPage() {
  return (
    <div className='digweed-container'>
      <div className="digweed-home-nav">
        <PageNavigation 
            className1='digweed_nav_class' 
            classNameNav='digweed_nav_class' 
            classNameContainer='digweed_nav_class' 
        />
      </div>
      <div className="digweed-image">
        <img className='digweed-image-img' src={digweed} />
      </div>
      <div className='digweed-hero' >
        <div className='digweed-link-title' >JOHN DIGWEED</div>
        <a className='digweed-link' target="_blank" href={'https://www.johndigweed.com/'}>JohnDigweed.com</a>
        <a className='digweed-link' target="_blank" href={'https://en.wikipedia.org/wiki/John_Digweed'}>Wikipedia</a>
        <a className='digweed-link' target="_blank" href={'https://www.mixcloud.com/johndigweed/'}>MixCloud</a>
        <a className='digweed-link' target="_blank" href={'https://soundcloud.com/john-digweed'}>SoundCloud</a>
        <a className='digweed-link' target="_blank" href={'https://www.residentadvisor.net/dj/digweed'}>ResidentAdvisor</a>
        <a className='digweed-link' target="_blank" href={'https://www.instagram.com/djjohndigweed/?hl=en'}>Instagram</a>
        <a className='digweed-link' target="_blank" href={'https://www.youtube.com/channel/UCXUO2biGVP7FKCqPEDwmt4w'}>YouTube</a>
        <a className='digweed-link' target="_blank" href={'https://www.facebook.com/djjohndigweed/'}>Facebook</a>
        <a className='digweed-link' target="_blank" href={'https://twitter.com/DJJohnDigweed?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Twitter</a>



      </div>

    </div>
  );
}