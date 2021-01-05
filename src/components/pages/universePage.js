import React, {useState} from 'react';
import PageNavigation from '../navigation/pagesNavigation'
import universe from '../../images/universe/psyche.jpg';

export default function UniversePage() {

  const [pageUni, setPageUni] = useState(1)

  const pageUp = () => {
    if (pageUni < 5) {
      setPageUni(pageUni + 1)
    } else {
      setPageUni(pageUni)
    }
    console.log('ypooo');
  }

  const pageDown= () => {
    if (pageUni > 1) {
      setPageUni(pageUni - 1)
    } else {
      setPageUni(pageUni)
    }
  console.log('ypooo');
  
  }

  return (
    <div className='universe-container'>
      <div className='universe-nav'>
        <PageNavigation 
          className1='universe_nav_class' 
          classNameNav='universe_nav_class' 
          classNameContainer='universe_nav_class' />
      </div>
      <div className='universe-body'>
          <img className='universe-body-img' src={universe} />
          {/* <a className='universe-body-link' href={'https://www.google.com'}>Google</a> */}
      </div>
      <div className='universe-pagination'>
              {(() => {
                switch (pageUni) {
                  case 1:
                    return (
                      <div className='universe-link-grid'>
                        <div className='universe-link-left'>
                          <a className='universe-body-link' target="_blank" href={'https://physics.info/equations/'}>Physics Hypertextbook</a>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=bg4XeFUVxcg&ab_channel=TraceDominguez'}>Time is a Flat Circle</a>
                        </div>
                        <div className='universe-link-right'>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=Da-2h2B4faU&ab_channel=Kurzgesagt%E2%80%93InaNutshell'}>String Theory (brief)</a>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=U9CuqShJjfc&ab_channel=Discoverychannel'}>String Theory documentary</a>
                        </div>
                      </div>
                    )
                  case 2:
                    return (
                      <div className='universe-link-grid'>
                        <div className='universe-link-left'>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=yuD34tEpRFw&ab_channel=ScienceABC'}>Einstein's Theory of Relativity (brief)</a>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=XFV2feKDK9E&ab_channel=WorldScienceFestival'}>Einstein's Theory of Relativity (11.5hr lecture)</a>
                        </div>
                        <div className='universe-link-right'>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=AyAK3QBnMGQ&ab_channel=92ndStreetY'}>Neil deGrasse Tyson interview</a>
                          <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=e-P5IFTqB98&ab_channel=Kurzgesagt%E2%80%93InaNutshell'}>Black Holes (brief) </a>
                        </div>
                      </div>
                    )
                    case 3:
                      return (
                        <div className='universe-link-grid'>
                          <div className='universe-link-left'>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=ZuvK-od647c&ab_channel=Veritasium'}>Spooky Action at a Distance</a>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=CBrsWPCp_rs&ab_channel=AdvexonScienceNetwork'}>Quantum Theory documentary</a>
                          </div>
                          <div className='universe-link-right'>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=BFrBr8oUVXU&ab_channel=WorldScienceFestival'}>Space, Time, and Entanglement</a>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=DGDJH6GA_bM&t=2962s&ab_channel=AndreaFicarelli'}>Stephen Hawking audiobook</a>
                          </div>
                        </div>
                      )
                    case 4:
                      return (
                        <div className='universe-link-grid'>
                          <div className='universe-link-left'>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=kD5yc1LQrpQ&ab_channel=LexFridman'}>Lex Fridman interviews Michio Kaku</a>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=7NN2vsNgbZs&ab_channel=NaturalWorld'}>Stephen Hawking A Personal Journey </a>
                          </div>
                          <div className='universe-link-right'>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=YSWd21z2qqE&ab_channel=WorldScienceFestival'}>String Theory World Science Festival</a>
                            <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=no3qLqUYBLo&ab_channel=WorldScienceFestival'}>Particle Physics</a>
                          </div>
                        </div>
                      )
                      case 5:
                        return (
                          <div className='universe-link-grid'>
                            <div className='universe-link-left'>
                              <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=5hVmeOCJjOU&ab_channel=TheRoyalInstitution'}>A Brief History of Quantum Mechanics</a>
                              <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=ashQciD8Gy8&ab_channel=Biography'}>Albert Einstein Biography</a>
                            </div>
                            <div className='universe-link-right'>
                              <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=9P6rdqiybaw&ab_channel=Kurzgesagt%E2%80%93InaNutshell'}>Wormholes</a>
                              <a className='universe-body-link' target="_blank" href={'https://www.youtube.com/watch?v=o9Vbw7W2708&ab_channel=FootballGoals'}>Magnetars, Black Holes, Quasars, and Pulsars</a>
                            </div>
                          </div>
                        )
    
                  default:
                    return <a className='universe-body-link' target="_blank" href={'https://www.google.com'}>default</a>;
                }
              })()}

            <div className="universe-page-buttons">
              <button className='universe-page-up' onClick={pageUp}>Page Up</button>
              <div className='universe-page-num'>{pageUni}</div>
              <button className='universe-page-down' onClick={pageDown}>Page Down</button>
            </div>

        </div>


      
    </div>

  );
}