import React, { useState, useEffect } from 'react';
import {Tabs, Tab, Form, Button, Carousel, Container} from 'react-bootstrap';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';


import './home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { mapAPIs } from '../../apiKeys';
import TodaysMatches from '../../components/Todays Matches/TodaysMatches';




const Home = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {

    // Value for league search bar
    const [LeagueSearchValue, setLeagueSearchValue] = useState("");

    // Value for Team search bar
    const [TeamSearchValue, setTeamSearchValue] = useState("");

    // Value for Team 1 in match search bar
    const [Team1SearchValue, setTeam1SearchValue] = useState("");

    // Value for 
    const [Team2SearchValue, setTeam2SearchValue] = useState("");

    // Value being searched for in search bar
    const [loading, setLoading] = useState(true);

    // Value being searched for in search bar
    const [todaysMatches, setTodaysMatches] = useState({});

    // Renders any error that shoud be displayed on the home page
    let error = useLocation();

    // React-router-dom Method for pushing to different page
    const history = useNavigate()

    

    //Length of the mapAPIs
    const apiLength = Object.keys(mapAPIs).length

    //Renders the error if there is any
    if(error.state){
        alert(error.state);
        error.state = "";
    }

    //Gets today's matches
    useEffect(() => {
        async function fetchData() {
            //Makes API calls to different token keys untill one is successful
            var apiCall = false;
            var i = 0;
            do{
                try{
                    //Fetches the data from the API where i is the API in apiKeys' array
                    const getTodaysMatches = await axios.get(mapAPIs[i].link + "matches",
                    { headers: { "X-Auth-Token": mapAPIs[i].token } });
                    console.log(mapAPIs[i].link + "matches")

                    //If the status of the request is ok it stores matches in useState, stops the loop, and displays the data in the webpage
                    if(getTodaysMatches.status ===  200){
                        setTodaysMatches(getTodaysMatches);
                        console.log(getTodaysMatches)
                        apiCall = false;
                        setLoading(false);
                    }
                }catch {
                    //If an error is catched keeps the loop running so it makes another call to another apiKey
                    console.log(`There was an error retrieving the data from the API token ${i}`);
                    apiCall = true;
                    setLoading(true);
                }

                i++;
                //Runs three times because that's the number of keys that we have
            } while(apiCall && i<apiLength);
        }
        fetchData();
    },[apiLength]);

    //Handles a sumission for the league tab
    const handleleLeagueSubmit = (e) => {
        e.preventDefault();
        if(LeagueSearchValue){
            //Sends the search value to the LeagueDIsplayed page to make the API call by 'state'
            history('/leagues/' + LeagueSearchValue, {state: LeagueSearchValue});
        } else {
            alert("Please type a league");
        }
    }

    //Handles a sumission for the team tab
    const handleTeamSubmit = (e) => {
        e.preventDefault();
        if(TeamSearchValue){
            //Sends the search value to the LeagueDIsplayed page to make the API call by 'state'
            history('/club/' + TeamSearchValue, {state: TeamSearchValue});
        } else {
            alert("Please type a club");
        }
    }

    //Handles a sumission for the match tab
    const handleMatchSubmit = (e) => {
        e.preventDefault();
        if(Team1SearchValue && Team2SearchValue){
            //Sends the search value to the LeagueDIsplayed page to make the API call by 'state'
            history('/matchsearch', {state: {team1: Team1SearchValue, team2: Team2SearchValue}});
        } else {
            alert("Please type a both clubs names");
        }
    }

    //If Data from Today's matches is not ready renders Loading...:
    if(loading){
        return (
            <>
                <div className='home'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}

                    <div className='home-content'>
                        <div className='welcomeMessage'>
                            <h3>Search all scores here! You can search by League, Club, or Match.</h3>
                            <h6>
                                You can also 
                                <Link to="/register">
                                    <b> sign up </b>
                                </Link>
                                    to get info of your favourite team in the page
                            </h6>
                        </div>
                        <Container fluid="md" className='carouselContainer'>
                            <Carousel variant="dark">
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(1)" src="photo (1).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(2)" src="photo (2).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(3)" src="photo (3).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(4)" src="photo (4).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(5)" src="photo (5).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(6)" src="photo (6).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(7)" src="photo (7).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(8)" src="photo (8).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(9)" src="photo (9).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(10)" src="photo (10).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(11)" src="photo (11).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(12)" src="photo (12).jpg" height="400" width="850"/>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                        <div className='home-search-window'>
                            <Tabs defaultActiveKey="league" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="league" title="By League">
                                <Form className="homeForm">
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" name="league" placeholder="Type league name here" onChange={e => setLeagueSearchValue(e.target.value.toLowerCase())}/>
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleleLeagueSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="team" title="By Team">
                                <Form className="homeForm">
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" name="league" placeholder="Type club name here" onChange={e => setTeamSearchValue(e.target.value.toLowerCase())}/>
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleTeamSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="match" title="By Match">
                                <Form className="homeForm">
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Type first club here" onChange={e => setTeam1SearchValue(e.target.value.toLowerCase())} />
                                        <Form.Control type="text" placeholder="Type second club here" onChange={e => setTeam2SearchValue(e.target.value.toLowerCase())} />
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleMatchSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>

                            </Tabs>
                        </div>
                        <div className='loadingContainer'>
                            <ReactLoading type="bars" color="#1c2237"/>
                        </div>
                    </div>
                </div>

            </>
            
        );
    //If Data from Today's matches is ready renders the matches:
    } else {
        return (
            <>  
                <div className='home'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}

                    <div className='home-content'>
                        <div className='welcomeMessage'>
                            <h3>Search all scores here! You can search by League, Club, or Match.</h3>
                            <h6>
                                You can also 
                                <Link to="/login">
                                    <b> sign up </b>
                                </Link>
                                    to get info of your favourite team in the page
                            </h6>
                        </div>
                        <Container fluid="md" className='carouselContainer'>
                            <Carousel variant="dark">
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(1)" src="photo (1).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(2)" src="photo (2).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(3)" src="photo (3).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(4)" src="photo (4).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(5)" src="photo (5).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(6)" src="photo (6).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(7)" src="photo (7).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(8)" src="photo (8).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(9)" src="photo (9).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(10)" src="photo (10).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(11)" src="photo (11).jpg" height="400" width="850"/>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                        <img className="d-block w-100" alt="Football  For Slider(12)" src="photo (12).jpg" height="400" width="850"/>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                        <div className='home-search-window'>
                            <Tabs defaultActiveKey="league" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="league" title="By League">
                                <Form className="homeForm" >
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" name="league" placeholder="Type league name here" onChange={e => setLeagueSearchValue(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleleLeagueSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="team" title="By Team">
                                <Form className="homeForm" >
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" name="league" placeholder="Type club name here" onChange={e => setTeamSearchValue(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleTeamSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="match" title="By Match">
                                <Form className="homeForm" >
                                    <Form.Group className="mb-3 inputForm" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Type first club here" onChange={e => setTeam1SearchValue(e.target.value.toLowerCase())} />
                                        <Form.Control type="text" placeholder="Type second club here" onChange={e => setTeam2SearchValue(e.target.value.toLowerCase())} />
                                    </Form.Group>
                                    <Button variant="success" type="submit" onClick={handleMatchSubmit} >
                                        Search
                                    </Button>
                                </Form>
                            </Tab>
                            </Tabs>
                        </div>
                        <div className='todaysMatchesContainer'>
                            <h1 id='today_matches_title'>Today's Matches</h1>
                            {todaysMatches.data.matches.map((match, index) => 
                                <TodaysMatches match={match} key={index}/>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};



export default Home;