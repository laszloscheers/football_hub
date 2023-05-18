import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { format } from 'date-fns';
import {Col, Container, Row} from 'react-bootstrap';
import ReactLoading from 'react-loading';

import './matchdisplayed.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { clubCrests, mapAPIs } from '../../apiKeys';
import Match from '../../components/Match/Match';
import { mapLeagues} from '../../helperFunctions';

const MatchDisplayed = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {

    // Renders useLocation so it takes the league name sent through a League's Link or Home Search bar by 'state'
    const query = useLocation();

    // React-router-dom Method for pushing to different page
    const history = useNavigate();

    //Error for Home page
    const [error, setError] = useState("");

    // Value being searched for in search bar
    const [loading, setLoading] = useState(true);

    //Length of the mapAPIs
    const apiLength = Object.keys(mapAPIs).length;

    //Stores the last five matches of both teams
    const [ last5Matches1, setLast5Matches1 ] = useState("");
    const [ last5Matches2, setLast5Matches2 ] = useState("");

    //Img for the competition
    const [ competition, setCompetition ] = useState("");

    useEffect(() => {
        //If a query came trhought useLocation and a team id was found for that query
        if (query.state) {

            //Finds the img for the competition
            const competitionSearch = Object.values(mapLeagues).find((competitionSearch) => {
                return competitionSearch.name.includes(query.state.competition.name.toLowerCase());
            });
            setCompetition(competitionSearch);

            async function fetchData() {
                //Leagues array for all the leagues that the clubs plays in
                let setLast5Matches1Array = [];
                let setLast5Matches2Array = [];

                //Makes API calls to different token keys untill one is successful
                let apiCall = false;
                var i = 0;
                do{
                    try{
                        // Fetch Team 1 Fixtures
                        const data1 = await axios.get(mapAPIs[i].link + "teams/" + query.state.homeTeam.id + "/matches",
                        { headers: { "X-Auth-Token": mapAPIs[i].token } });
                        // Fetch Team Fixtures
                        const data2 = await axios.get(mapAPIs[i].link + "teams/" + query.state.awayTeam.id + "/matches",
                        { headers: { "X-Auth-Token": mapAPIs[i].token } });

                        //If the status of the request is ok it stores matches in useState, stops the loop, and displays the data in the webpage
                        if(data1.status ===  200 && data2.status ===  200){
                            // Method to find last 5 matches
                            const results1 = data1.data.matches.filter(match => match.status === "FINISHED");
                            const last51 = results1.slice(-6).reverse();
                            setLast5Matches1Array =last51.slice(1);
                            const results2 = data2.data.matches.filter(match => match.status === "FINISHED");
                            const last52 = results2.slice(-6).reverse();
                            setLast5Matches2Array =last52.slice(1);
                            //Stops the loop
                            apiCall = false;
                        }
                    }catch {
                        //If it is the third error it redirects to the home page and send the error "Too many requests"
                        if (!setLast5Matches1Array && !setLast5Matches1Array && i===apiLength-1){
                            setError("Too many requests, try again later")
                            console.log("Too many requests, try again later")
                        }else{
                            //If an error is catched keeps the loop running so it makes another call to another apiKey
                            apiCall = true;
                        }
                    }

                    i++;
                    //Runs three times because that's the number of keys that we have
                } while(apiCall && i<apiLength);
                //sets matchesByLeague in the useStete in order to display it in the web page
                if(setLast5Matches1Array.length && setLast5Matches1Array.length){
                    setLast5Matches1(setLast5Matches1Array);
                    setLast5Matches2(setLast5Matches2Array);
                    setLoading(false);
                }
        }
        fetchData();

        } else if (!query.state){
            //If the state has come but there was no matches fot the team queried
            setError("There was an error, Please try again later");
        }
    },[apiLength,loading,query.state]);

    if (error) {
        //If there is an error, redirects to home page and sends the error to be displayed
        history('/', {state: error});
    } else if(loading){
        //Id the API call hasn't arrived yet renders Loading...
        return (
            <>
                <div className='matchDisplayed matchDisplayed-loading'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}
                    <div className='matchDisplayedContent'>
                        <ReactLoading type="bars" color="#1c2237" height="15%" width="15%" />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='matchDisplayed'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}
                    <div className='matchDisplayedContent'>
                        <div>
                            <Link to={'/leagues/' + query.state.competition.name.toLowerCase()} state={query.state.competition.name.toLowerCase()}>
                                <div className='matchDisplayedHero'>
                                    <div>
                                    <   div className='matchDisplayedImg'>
                                            <img src={"../"+ competition.logo} alt={query.state.competition.name + ' logo'}></img> 
                                        </div>
                                        <div>
                                            <div ><h2>{query.state.competition.name}</h2></div >
                                        </div>
                                        <div>
                                            <div ><h4>{query.state.area.name}</h4></div >
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='matchDisplayedMatch'>
                            <div>
                                <Match match={query.state} className='matchDisplayedMatch'/>
                            </div>
                        </div>
                        <div className='matchLast5Matches'>
                            <h2>Last Five Matches</h2>
                        </div>
                        <Container className="matchLastGames">
                            <div >
                                <h3>{query.state.homeTeam.name}</h3>
                                    {last5Matches1?.map(match => (
                                        <Link to={'/match/'} state={match}>
                                            <Row className='content'>
                                                <Col>
                                                    <img className='club_crests_last_5' src={clubCrests.link1 +match.homeTeam.id+ clubCrests.link2} alt={"Image of " + match.homeTeam.name}></img>
                                                    <br></br>
                                                    <span className='date_last_5'>{match.homeTeam.name}</span>
                                                </Col>
                                                <Col className='score_last_5'>
                                                 <Container>
                                                  <b>{match.score.fullTime.home && match.score.fullTime.home} - {match.score.fullTime.home && match.score.fullTime.away}</b>
                                                  <br></br>
                                                  <span className='date_last_5'>{format(new Date(`${match.utcDate}`), 'dd/MM/yy')}</span>
                                                 </Container>
                                                </Col>
                                                <Col>
                                                  <img className='club_crests_last_5' src={clubCrests.link1 +match.awayTeam.id+ clubCrests.link2} alt={"Image of " + match.awayTeam.name}></img>
                                                  <br></br>
                                                  <span className='date_last_5'>{match.awayTeam.name}</span>
                                                </Col>
                                            </Row>
                                        </Link>
                                    ))}
                            </div>
                            <div>
                                <h3>{query.state.awayTeam.name}</h3>
                                {last5Matches2?.map(match => (
                                    <Link to={'/match/'} state={match} >
                                        <Row className='content'>
                                                <Col>
                                                    <img className='club_crests_last_5' src={clubCrests.link1 +match.homeTeam.id+ clubCrests.link2} alt={"Image of " + match.homeTeam.name}></img>
                                                    <br></br>
                                                    <span className='date_last_5'>{match.homeTeam.name}</span>
                                                </Col>
                                                <Col className='score_last_5'>
                                                 <Container>
                                                  <b>{match.score.fullTime.home && match.score.fullTime.home} - {match.score.fullTime.away && match.score.fullTime.away}</b>
                                                  <br></br>
                                                  <span className='date_last_5'>{format(new Date(`${match.utcDate}`), 'dd/MM/yy')}</span>
                                                 </Container>
                                                </Col>
                                                <Col>
                                                  <img className='club_crests_last_5' src={clubCrests.link1 +match.awayTeam.id+ clubCrests.link2} alt={"Image of " + match.awayTeam.name}></img>
                                                  <br></br>
                                                  <span className='date_last_5'>{match.awayTeam.name}</span>
                                                </Col>
                                            </Row>
                                    </Link>
                                    ))}
                            </div>
                        </Container>
                    </div>
                </div>
            </>
        )
    }

};



export default MatchDisplayed;