import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

import { OddsApi1 } from '../../apiKeys';
import OddsResults from '../../components/Odds Comps/OddsResults';
import Sidebar from '../../components/Sidebar/Sidebar';
import './oddsLeaguesDisplayed.css';

function OddsLeaguesDisplayed({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) {
  //UseStates used
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);

  //Determining the which league to display for API from pathname
  let path = (`${window.location.pathname}`)
  let oddsCode = path.substring(6, path.length)
 
  //Fetching Data
  const fetchOddsData = useCallback(async () => {
    const getOdds = await axios.get(OddsApi1.link1 + oddsCode + OddsApi1.link2 + OddsApi1.token3 + OddsApi1.link4);
    const results = getOdds.data
    setOdds(results);
    console.log(results)
    setLoading(false);
  });

  useEffect(() => {
    fetchOddsData();
  }, [oddsCode,fetchOddsData])
  if(loading){
    return (
      <>
        <div className='oddsLeaguesDisplayed oddsLeaguesDisplayedContent-loading'>
            {username && (
                <Sidebar username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
            )}
            <div className='oddsLeaguesDisplayedContent'>
                <ReactLoading data-testid="oddsLoading" type="bars" color="#1c2237" height="15%" width="15%" />
            </div>
        </div>
      </>
    );
  }else {
    return (
      <>
      <div className='oddsLeaguesDisplayed'>
        {username && (
          <Sidebar username={username} favouriteTeam={favouriteTeam}
            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
        )}
  
        <div data-testid="oddsContainer" className="oddsLeaguesDisplayedContent">
        {
          !loading && 
          odds.map((odd, index) => 
            <OddsResults key={index}
              home_team={odd.bookmakers[0].markets[0].outcomes[0].name}
              away_team={odd.bookmakers[0].markets[0].outcomes[1].name}
              home_team_odds={odd.bookmakers[0].markets[0].outcomes[0].price}
              away_team_odds={odd.bookmakers[0].markets[0].outcomes[1].price}
              draw={odd.bookmakers[0].markets[0].outcomes[2].price}
              title={odd.bookmakers[0].title}
              date={odd.commence_time}
              competitionName={odd.sport_title}
              />  
          )}
        </div>
      </div>
      </>
    );
  }

} 

export default OddsLeaguesDisplayed