import React, { useState } from "react";
import PageNavigation from "../navigation/pagesNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ariana from "../../images/ariana/space.jpg";
import hearts from "../../images/ariana/pink-hearts.jpg";
// import ariana from '../../images/ariana/glasses.jpg'

export default function ArianaPage() {
  const [page, setPage] = useState(1);

  const pageUp = () => {
    if (page < 5) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const pageDown = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  return (
    <div className="ariana-container">
      <div className="ariana-home-nav">
        <img src={hearts} className="ariana-header" />
        <PageNavigation className='ariana-home'
          className1="ariana_nav_class"
          classNameNav="ariana_nav_class"
          classNameContainer="ariana_nav_class"
        />
      </div>
      <div className="ariana-image">
        <img className="ariana-image-img" src={ariana} />
      </div>
      <div className="ariana-hero">
        <div className="ariana-link-left">
          <div className="ariana-page-buttons">
            <button className="ariana-page-up" onClick={pageUp}>
              <FontAwesomeIcon className="ariana-heart" icon="heart" />
              <span>Next</span>
              <FontAwesomeIcon className="ariana-heart" icon="heart" />
            </button>
            <div className="ariana-page-num">{page}</div>
            <button className="ariana-page-down" onClick={pageDown}>
              <FontAwesomeIcon className="ariana-heart" icon="heart" />
              <span>Prev</span>
              <FontAwesomeIcon className="ariana-heart" icon="heart" />
            </button>
          </div>
        </div>
        <div className="ariana-link-right">
          {(() => {
            switch (page) {
              case 1:
                return (
                  <div className="ariana-vids">
                    <div className="ariana-vid-title">Imagine</div>
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/fGeH483gNOg"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
              case 2:
                return (
                  <div className="ariana-vids">
                    <div className="ariana-vid-title">Motive</div>
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/IbiBkVPUsrk"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
              case 3:
                return (
                  <div className="ariana-vids">
                    <div className="ariana-vid-title">Breathin</div>
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/kN0iD0pI3o0"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
              case 4:
                return (
                  <div className="ariana-vids">
                    <div className="ariana-vid-title">POV</div>
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/bmv_gHYh8zw"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
              case 5:
                return (
                  <div className="ariana-vids">
                    <div className="ariana-vid-title">34+35</div>
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/B6_iQvaIjXw"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
              default:
                return (
                  <div className="ariana-vids">
                    <iframe
                      className="ariana-vid"
                      src="https://youtube.com/embed/bmv_gHYh8zw"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                );
            }
          })()}
          {/* <a className='ariana-link' target="_blank" href={'https://www.johnariana.com/'}>Johnariana.com</a>
            <a className='ariana-link' target="_blank" href={'https://en.wikipedia.org/wiki/John_ariana'}>Wikipedia</a>
            <a className='ariana-link' target="_blank" href={'https://www.mixcloud.com/johnariana/'}>MixCloud</a>
            <a className='ariana-link' target="_blank" href={'https://soundcloud.com/john-ariana'}>SoundCloud</a>
            <a className='ariana-link' target="_blank" href={'https://www.residentadvisor.net/dj/ariana'}>ResidentAdvisor</a> */}
        </div>
      </div>
      <div className='footer'>
        <a className='ariana-social' target="_blank" href={'https://www.arianagrande.com/'}>
          <FontAwesomeIcon className="ariana-social-icon" icon="home" />
        </a>
        
        
        <a className='ariana-social' target="_blank" href={'https://www.instagram.com/arianagrande/'}>
          <FontAwesomeIcon className="ariana-social-icon" icon={['fab', 'instagram']} />
        </a>
        
        <a className='ariana-social' target="_blank" href={'https://twitter.com/ArianaGrande?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>
          <FontAwesomeIcon className="ariana-social-icon" icon={['fab', 'twitter']} />
        </a>

        
        <a className='ariana-social' target="_blank" href={'https://www.facebook.com/arianagrande/'}>
          <FontAwesomeIcon className="ariana-social-icon" icon={['fab', 'facebook']} />
        </a>

        
        <a className='ariana-social' target="_blank" href={'https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g/'}>
          <FontAwesomeIcon className="ariana-social-icon" icon={['fab', 'youtube']} />
        </a>

        

      </div>
    </div>
  );
}
