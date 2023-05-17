import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import ReactLoading from 'react-loading';

import './teamdisplayed.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { clubId, mapCompetitions } from '../../helperFunctions';
import { mapAPIs,clubCrests } from '../../apiKeys';
import Match from '../../components/Match/Match';


const TeamDisplayed = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {

    // Renders useLocation so it takes the league name sent through a League's Link or Home Search bar by 'state'
    const query = useLocation();

    // React-router-dom Method for pushing to different page
    const history = useNavigate()


    //Error for Home page
    const [error, setError] = useState("");

    // Value being searched for in search bar
    const [loading, setLoading] = useState(true);

    //League Table
    const [teamMatches, setTeamMatches] = useState([""]);

    // Sends the team name to find Team's Id
    const team = Object.values(clubId).find((team) => {
        return team.name.includes(query.state);
    });


    //Length of the mapAPIs
    const apiLength = Object.keys(mapAPIs).length
  
    useEffect(() => {
        //If a query came trhought useLocation and a team id was found for that query
        if (query.state && team) {
            async function fetchData() {


                //Leagues array for all the leagues that a club plays in
                let leagues = [];

                //Makes API calls to different token keys untill one is successful
                let apiCall = false;
                var i = 0;
                do{
                    try{
                        //Fetching the leagues that that the team is involved via API
                        const getTeamLeagues  = await axios.get(mapAPIs[i].link + "teams/" + team.id,
                        { headers: { "X-Auth-Token": mapAPIs[i].token } });
                        //If the status of the request is ok it stores matches in useState, stops the loop, and displays the data in the webpage
                        if(getTeamLeagues.status ===  200){
                            //Stores in an array the leagues' codes for that teams
                            for (let j = 0; j<getTeamLeagues.data.activeCompetitions.length; j++) {
                                // Sends the competition name to check if it's one of the availables ones
                                const competition = Object.values(mapCompetitions).find((competition) => {
                                    return competition.name.includes(getTeamLeagues.data.activeCompetitions[j].name.toLowerCase());
                                });
                                if(competition){
                                    leagues.push(competition.code);
                                }
                            }
                            //Stops the loop
                            apiCall = false;
                        }
                    }catch {
                        //If it is the third error it redirects to the home page and send the error "Too many requests"
                        if (i===apiLength-1){
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

                //Leagues array for all the matches by leagues that a club plays in
                let matchesByLeagues = [];
                const status = ["SCHEDULED", "FINISHED"]
                //Loops throught the leagues array, sending to matchesByLeagues an object containing the name of the league and an array with all the matches for that league
                for(var k = 0; k<leagues.length; k++) {
                    let matches = [];
                    let leagueName;
                    for(var m = 0; m<status.length; m++){
                        //Makes API calls to different token keys untill one is successful
                        var apiCall2 = false;
                        var l = 0;
                        do{
                            try{
                                //Fetching the leagues that that the team is involved via API
                                const getMatches = await axios.get(mapAPIs[l].link + "competitions/" + leagues[k] + "matches",
                                { headers: { "X-Auth-Token": mapAPIs[l].token }, params:{status: status[m]} });
                                //If the status of the request is ok it stores the league name and all maches in matchesByLeague array
                                if(getMatches.status ===  200){
                                    //Filters all the matches where the team plays as awayTeam and as homeTeam
                                    const matchesArray = getMatches.data.matches.filter((match)=>{
                                        return match.awayTeam.id === team.id || match.homeTeam.id === team.id;
                                    });
                                    if(matchesArray.length){
                                        //Stores in matchesByLeagues all the matches that the team is playing for each league is playing in
                                        matches.push({status: status[m],matches: matchesArray});
                                        leagueName = getMatches.data.competition.name;
                                    }
                                    apiCall2 = false;
                                }
                            }catch (e){
                                //If it's the last loop and matchesByLeagues still empty, sets the error to be "Too many requests" and redirects to home page
                                if(!matchesByLeagues && k===leagues.length-1 && l===apiLength-1){
                                    setError("Too many requests, try again later")
                                    console.log("Too many requests, try again later")
                                } else{
                                    // If an error is catched stopes the loop
                                    apiCall2 = true;
                                }
                            }

                            l++;
                            //Runs three times because that's the number of keys that we have
                        } while(apiCall2 && l<apiLength);
                    }
                    if(leagueName){
                        //If there is matches for a league stores the data
                        matchesByLeagues.push({leagueName: leagueName, matches: matches});
                    }

                }
                //sets matchesByLeague in the useStete in order to display it in the web page
                setTeamMatches(matchesByLeagues);
                setLoading(false);
            }
            
            fetchData();
        } else if (query.state){
            //If the state has come but there was no matches fot the team queried
            setError("There were no matches for that Club")
        }
        
    },[query.state,team,apiLength]);



    if (error) {
        //If there is an error, redirects to home page and sends the error to be displayed
        history('/', {state: error});
    } else if(loading){
        //Id the API call hasn't arrived yet renders Loading...
        return (
            <>      
                <div className='team-displayed-loading team-displayed'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}
                    <div className='team-container'>
                        <ReactLoading type="bars" color="#1c2237" height="15%" width="15%" />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='team-displayed'>
                    {username && (
                        <Sidebar username={username} favouriteTeam={favouriteTeam}
                            favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                    )}
                    <div className='team-container'>
                        <div className='teamDisplayedContent'>
                            <div>
                                <div className='teamDisplayedHero'>
                                    <div>
                                        <div className='teamDisplayedImg'>
                                        <img id='match_crests_club' src={clubCrests.link1 + team.id + clubCrests.link2} alt={team.name}></img>
                                        </div>
                                        <div>
                                            <div ><h2 className='capatilise_team_name'>{team.name}</h2></div >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            teamMatches.map((league, index) => 
                                <div key={-index}  className='heroContainer'>
                                    <div className='teamLeagueName'>
                                        <Link to={'/leagues/' + league.leagueName} state={league.leagueName.toLowerCase()}>
                                            <h1>{league.leagueName}</h1>
                                        </Link>
                                    </div>

                                    {
                                        league.matches.map((status, index)=>
                                        <div key={index}>
                                            {
                                                status.matches.map((match, index)=>
                                                <div className='teamMatch'>
                                                    <Link to={'/match/'} state={match} key={index+10}>
                                                        <Match match={match} />
                                                    </Link>
                                                </div>
                                                )
                                            }
                                        </div>
                                        )
                                    }
                                </div>
                            )

                        }
                    </div>
                </div>
            </>
        )
    }


};



export default TeamDisplayed;