import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { footballApi3, config, config1, config2 } from '../../apiKeys'
import CurrentGameWeek from '../../components/Game Week Comps/CurrentGameWeek'
import Sidebar from '../../components/Sidebar/Sidebar'
import ReactLoading from 'react-loading';

import './gameWeekMatches.css'

const GameWeekMatches = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {

  //Game Week Counters
  const [matchDayCounter, setMatchDayCounter] = useState("1")
  const [matchDayCounterGermany, setMatchDayCounterGermany] = useState("1")
  const [matchDayCounterChampionship, setMatchDayCounterChampionship] = useState("1")

  //Leagues states
  const [plMatches, setPlMatches] = useState([]);
  const [saMatches, setSaMatches] = useState([]);
  const [fl1Matches, setFl1Matches] = useState([]);
  const [bl1Matches, setBl1Matches] = useState([]);
  const [elcMatches, setElcMatches] = useState([]);
  const [pdMatches, setPdMatches] = useState([]);

  const fetchCurrentGameWeek = useCallback(async () => {
    //fetching data
    const getPL = await axios.get( footballApi3.link1 + "PL" + footballApi3.link2 + `${matchDayCounter}`, config)
    const getSA = await axios.get(footballApi3.link1 + "SA" + footballApi3.link2 +`${matchDayCounter}`, config)
    const getFL1 = await axios.get(footballApi3.link1 + "FL1" + footballApi3.link2 +`${matchDayCounter}`, config1)
    const getBL1 = await axios.get(footballApi3.link1 + "BL1" + footballApi3.link2 +`${matchDayCounterGermany}`, config1)
    const getELC = await axios.get(footballApi3.link1 + "ELC" + footballApi3.link2 +`${matchDayCounterChampionship}`, config2)
    const getPD = await axios.get(footballApi3.link1 + "PD" + footballApi3.link2 +`${matchDayCounter}`, config2)

    //assigning vars to every league
    axios.all([getPL, getSA, getFL1, getBL1, getELC, getPD]).then(
    axios.spread((...allData) => {
     const plData = allData[0].data.matches
     const saData = allData[1].data.matches
     const fl1Data = allData[2].data.matches
     const bl1Data = allData[3].data.matches
     const elcData = allData[4].data.matches
     const pdData = allData[5].data.matches

    //setting league data 
     setPlMatches(plData)
     setSaMatches(saData)
     setFl1Matches(fl1Data)
     setBl1Matches(bl1Data)
     setElcMatches(elcData)
     setPdMatches(pdData)
     console.log(pdData)

     //setting matchday counters
     const counterForEngItaEspFra = allData[0].data.matches[0].season.currentMatchday
     setMatchDayCounter(counterForEngItaEspFra)
     const counterGer = allData[3].data.matches[0].season.currentMatchday
     setMatchDayCounterGermany(counterGer)
     const counterELC = allData[4].data.matches[0].season.currentMatchday
     setMatchDayCounterChampionship(counterELC)
      })
    );
  }); 
 // Function is ran again once the matchday counter is updated to retrieve data for current game week 
  useEffect(() => {
    fetchCurrentGameWeek();
  }, [matchDayCounter, fetchCurrentGameWeek])

  //Array for each league
  const AllLeagues = [ plMatches, saMatches, fl1Matches, bl1Matches, elcMatches, pdMatches ] 

  if (plMatches.length !== 0) {
    return (
      <>
      <div class="gameWeekMatches">
        {username && (
          <Sidebar username={username} favouriteTeam={favouriteTeam}
            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
        )}
        <div className="gameWeekMatchesContent">

          <Container>
            {AllLeagues.map((everyLeague, index) => {
              return (
                <Container key={index}>
                  <br />
                  <Container ><div id='game_week_matches_title'></div></Container>
                  {everyLeague.map((currentGW) =>
                    <Link to={'/match/'} state={currentGW} key={currentGW.id} className='match_links'>
                      <CurrentGameWeek key={currentGW.id}
                        leagueName={currentGW.season.id}
                        home={currentGW.homeTeam.name}
                        away={currentGW.awayTeam.name}
                        time={currentGW.utcDate}
                        crestHome={currentGW.homeTeam.id}
                        crestAway={currentGW.awayTeam.id}
                        scoreAway={currentGW.score.fullTime.awayTeam}
                        scoreHome={currentGW.score.fullTime.homeTeam} />
                    </Link>)}
                </Container>
              )
            })}
          </Container>
          <br></br>
        </div>
      </div>
      </>
    )
  } else {
    return (
      <>
        <div className='gameWeek-loading gameWeekMatches'>
            {username && (
                <Sidebar username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
            )}
            <div className='gameWeekMatchesContent'>
                <ReactLoading type="bars" color="#1c2237" height="15%" width="15%" />
            </div>
        </div>
      </>
    )
  }
}

export default GameWeekMatches;