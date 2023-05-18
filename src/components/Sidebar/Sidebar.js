import React, { useEffect, useState, useCallback } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import './sidebar.css';
import MiniLeagueTable from '../MiniLeagueTable/MiniLeagueTable';
import { clubCrests } from '../../apiKeys';



const Sidebar = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {


    const [nextMatch, setNextMatch] = useState();
    const [last5Matches, setLast5Matches] = useState([]);
    const [leaguePosition, setLeaguePosition] = useState();
    const [filteredLeague, setFilteredLeague] = useState([]);



    // Method to find next match
    const findNextMatch = useCallback(() => {
        const fixtures = favouriteFixtures?.filter(match => match.status !== "FINISHED");
        setNextMatch(fixtures[0]);
    },[favouriteFixtures]);


    // Method to find last 5 matches
    const findLast5Matches = useCallback(() => {
        const results = favouriteFixtures?.filter(match => match.status === "FINISHED");
        const last5 = results.slice(-5).reverse();
        setLast5Matches(last5);
    },[favouriteFixtures]);


    // Method to filter down the league to 7 positions
    const filterLeague = useCallback((league) => {
        // Find League Position
        league.forEach((place) => {
            if (place.team.id === favouriteTeam.id) {
                setLeaguePosition(place.position);
            }
        });
        
        // Top of the table
        if (leaguePosition <= 4) {
            const filteredArray = league.slice(0, 7);
            setFilteredLeague(filteredArray);

        } else if (leaguePosition >= (favouriteLeague.length - 3)) {
            const filteredArray = league.slice(favouriteLeague.length - 7, favouriteLeague.length);
            setFilteredLeague(filteredArray);

        } else if (leaguePosition > 4 && leaguePosition < (favouriteLeague.length - 3) ) {
            const filteredArray = league.slice(leaguePosition - 4, leaguePosition + 3);
            setFilteredLeague(filteredArray);
        }
    },[favouriteLeague.length, favouriteTeam.id, leaguePosition]);

    // Sets next match and results when rendered or fixtures changes
    useEffect(() => {
        if (favouriteFixtures?.length) {
            findNextMatch();
            findLast5Matches();
        }
    }, [favouriteFixtures, findLast5Matches, findNextMatch]);


    // Sets filtered league table when rendered or league changes
    useEffect(() => {
        if (favouriteLeague?.length) {
            filterLeague(favouriteLeague);
        }
    }, [favouriteLeague, nextMatch, filterLeague]);


    
    




    if (filteredLeague.length === 7) {
        return (
            <div className='sidebar'>
                <div className="sidebarContainer">
                    {username && (
                        <Link style={{ textDecoration: "none", color: "black"}} to={'/club/' + favouriteTeam.name} state={favouriteTeam.name.toLowerCase()}><div className="userSection">
                            {/* Username */}
                            <div className='username'>Welcome {username}</div>

                            {/* Club Crest */}
                            <div className="crestContainer">
                                <img className='crest' src={favouriteTeam?.crest} alt="club crest" />
                            </div>

                            {/* Club Name */}
                            <div className="clubName">
                                <p>{favouriteTeam?.name}</p>
                            </div>
                        </div></Link>

                    )}

                    {last5Matches?.length && (
                        <div className="sidebarFixtures">
                            {/* Next Match */}
                            <Link style={{ textDecoration: "none", color: "black" }} to={'/match/'} state={nextMatch}>
                                <div className="nextGame">
                                    <div className='heading'>Next Game:</div>
                                    <div className="teams">
                                        <div className='team'>{nextMatch?.homeTeam.name} Vs</div>
                                        <div className='team'>{nextMatch?.awayTeam.name}</div>
                                    </div>
                                    
                                    <div className="datesAndCrestsContainer">
                                        <div className="nextCrestContainer">
                                            <img src={clubCrests.link1 + nextMatch?.homeTeam.id + clubCrests.link2} alt="" className='nextCrest' />
                                        </div>
                                        <div className="dateAndTime">
                                            <div className='date'>{format(new Date(`${nextMatch?.utcDate}`), 'dd/MM/yy')}</div>
                                            <div className='time'>{nextMatch?.utcDate.slice(11, 16)}</div>
                                        </div>
                                        <div className="nextCrestContainer">
                                            <img src={clubCrests.link1 + nextMatch?.awayTeam.id + clubCrests.link2} alt="" className='nextCrest' />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* last 5 Games */}
                            <div className="lastGames">
                                {last5Matches?.map(match => (
                                    
                                    <Link style={{ textDecoration: "none", color: "black" }} to={'/match/'} state={match}>
                                        <div className='result'>
                                            <div style={{ fontSize: "12px" }}>{format(new Date(`${match.utcDate}`), 'dd/MM/yy')}</div>
                                            <div>
                                                <span className='resultName'>{match.homeTeam.name}</span> 
                                                <span className='resultScore'>{match.score.fullTime.home}</span>
                                            </div>
                                            <div className='awayTeam'>
                                                <span className='resultName'>{match.awayTeam.name}</span>
                                                <span className='resultScore'>{match.score.fullTime.away}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {filteredLeague?.length && <MiniLeagueTable standings={filteredLeague} />}

                </div>
            </div>
        );

    } else {
        return (
            <div className='sidebar'>
                <div className="sidebarContainer">
                    {username && (
                        <div className="userSection">
                            {/* Username */}
                            <div className='username'>Welcome {username}</div>

                            {/* Club Crest */}
                            <div className="crestContainer">
                                <img className='crest' src={favouriteTeam?.crestUrl} alt="club crest" />
                            </div>

                            {/* Club Name */}
                            <div className="clubName">
                                <p>{favouriteTeam?.name}</p>
                            </div>
                        </div>
                    )}

                    {last5Matches?.length && (
                        <div className="sidebarFixtures">
                            {/* Next Match */}
                            <div className="nextGame">
                                <div className='heading'>Next Game:</div>
                                <div className="teams">
                                    <div className='team'>{nextMatch?.homeTeam.name} Vs</div>
                                    <div className='team'>{nextMatch?.awayTeam.name}</div>
                                </div>

                                <div className='date'>{format(new Date(`${nextMatch?.utcDate}`), 'dd/MM/yy')}</div>
                                <div className='time'>{nextMatch?.utcDate.slice(11, 16)}</div>
                            </div>

                            {/* last 5 Games */}
                            <div className="lastGames">
                                {last5Matches?.map(match => (

                                    <div className='result'>
                                        <div style={{ fontSize: "12px" }}>{format(new Date(`${match.utcDate}`), 'dd/MM/yy')}</div>
                                        <div>
                                            <span className='resultName'>{match.homeTeam.name}</span>
                                            <span className='resultScore'>{match.score.fullTime.home}</span>
                                        </div>
                                        <div className='awayTeam'>
                                            <span className='resultName'>{match.awayTeam.name}</span>
                                            <span className='resultScore'>{match.score.fullTime.away}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    
    
};

export default Sidebar;