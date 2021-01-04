import React, {useState} from 'react';
import PageNavigation from '../navigation/pagesNavigation'
import alien1 from '../../images/alien/visitor.jpg';






export default function  AlienPage() {

  const [page, setPage] = useState(1)



  const pageUp = () => {
    if (page < 5) {
      setPage(page + 1)
    } else {
      setPage(page)
    }
    
    console.log('page', page)
  }
  const pageDown= () => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      setPage(page)
    }

    console.log('page', page)
  }


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
          {/* <a className='alien-body-link' href={'https://www.google.com'}>Google</a> */}
      </div>
      <div className='alien-pagination'>

              {(() => {
                switch (page) {
                  case 1:
                    return (
                      <div className='alien-link-grid'>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=auITEKd4sjA&ab_channel=PowerfulJRE'}>Pentagon UFO video</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=LrrNu_m_9K4&ab_channel=CoolWorlds'}>Alien Documentary</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=DSZ2mSnaC44&ab_channel=CBS'}>UFO in Jerusalem</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=fzMX2CVIZSQ&ab_channel=LordSeth'}>Guide to Alien Races</a>
                      </div>
                    )
                  case 2:
                    return (
                      <div className='alien-link-grid'>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=-ZTJJn8ocYw&ab_channel=CBS'}>New York City UFO</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=lfCQDyQW3To&ab_channel=CTVNews'}>Canadian UFOs</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=qbH9OZupWOg&ab_channel=TheInfographicsShow'}>Iran UFO</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=DVq7gBH70WE&t=136s&ab_channel=QuestTV'}>Soviet UFOs/USOs</a>
                      </div>
                    )                  
                    case 3:
                      return (
                        <div className='alien-link-grid'>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=BEWz4SXfyCQ&ab_channel=PowerfulJRE'}>Bob Lazar</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=zPivZc7NNp4&ab_channel=LushPrime'}>The Tall Whites</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=bXuJavRcibw&ab_channel=LordanARTS'}>Valient Thor</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=KDqZvGJW4gk&ab_channel=VICE'}>Crop Circles</a>
                        </div>
                      )    
                  case 4:
                    return (
                      <div className='alien-link-grid'>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=BEWz4SXfyCQ&ab_channel=PowerfulJRE'}>The Alien Channeler</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=npeCDLsyJwE&ab_channel=BuzzFeedUnsolvedNetwork'}>Phoenix Lights</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=KC8qr-U9ehU&ab_channel=WatchMojo.com'}>Ten UFO Sightings</a>
                        <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=KXKvKJw6Zb4&ab_channel=WatchMojo.com'}>20 More UFO Sightings</a>
                      </div>
                    )                    
                    case 5:
                      return (
                        <div className='alien-link-grid'>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=0135-dCw7Kg&ab_channel=QuestTV'}>Close Encounter</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=U-hSe9DmdPg&ab_channel=TheView'}>Mysterious Miami Lights</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=4UjqFaQq_7I&ab_channel=8NewsNOWLasVegas'}>S-4 Base</a>
                          <a className='alien-body-link' target="_blank" href={'https://www.youtube.com/watch?v=gFy6LVlNc6c&ab_channel=Denver7%E2%80%93TheDenverChannel'}>Definite Real Alien</a>
                        </div>
                      )                      // return <Specie />;

                  default:
                    return <a className='alien-body-link' target="_blank" href={'https://www.google.com'}>default</a>;
                }
              })()}

            <div className="alien-page-buttons">
              <button className='alien-page-up' onClick={pageUp}>Page Up</button>
              <div className='alien-page-num'>{page}</div>
              <button className='alien-page-down' onClick={pageDown}>Page Down</button>
            </div>

        </div>


      
    </div>

  );
}