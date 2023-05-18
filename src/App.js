import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home/Home';
import LeaguesList from './pages/Leagues/Leagues';
import LeagueDisplayed from './pages/League Displayed/LeagueDisplayed';
import TeamDisplayed from './pages/Team Displayed/TeamDisplayed';
import MatchSearch from './pages/Match Search/MatchSearch';
import MatchDisplayed from './pages/Match Displayed/MatchDispayed';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Odds from './pages/OddsPages/Odds';
import OddsLeaguesDisplayed from './pages/OddsPages/OddsLeaguesDisplayed';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useAuth, database, ref, onValue } from './firebase';
import { sideBarApi } from './apiKeys';
import { findClubId } from './helperFunctions';
import { findLeagueId } from './helperFunctions';
import GameWeekMatches from './pages/GameWeek/GameWeekMatches';




function App() {

    // Get current user if logged in
    const currentUser = useAuth();

    const [username, setUsername] = useState();
    const [favouriteTeam, setFavouriteTeam] = useState();
    const [favouriteLeague, setFavouriteLeague] = useState();
    const [favouriteFixtures, setFavouriteFixtures] = useState();


    // Fetch Info about the favourite club of user
    const fetchTeamInfo = async (club) => {

        // Find the club Id
        const clubId = findClubId(club);

        // Fetch Team Infomation
        const data = await axios.get(sideBarApi.link + "teams/" + clubId,
            { headers: { "X-Auth-Token": sideBarApi.token } });
        // Store in state 
        setFavouriteTeam(data.data);

        // Fetch Team Fixtures
        const data2 = await axios.get(sideBarApi.link + "teams/" + clubId + "/matches",
            { headers: { "X-Auth-Token": sideBarApi.token } });
        setFavouriteFixtures(data2.data.matches);
    };

    // Fetch Info about the league of the favourite club of user
    const fetchLeagueInfo = async (team) => {
        // Find League Name
        const favouriteLeague = team.activeCompetitions[0].name;
        // Find the Id of the league
        let favouriteLeagueId = findLeagueId(favouriteLeague);
        // Check for bundesliga, seria a bug
        if (favouriteLeagueId === "TryAgain") {
            favouriteLeagueId = findLeagueId(team.activeCompetitions[1].name);
        }
        console.log(favouriteLeagueId);
        // Fetch Standings
        const data = await axios.get(sideBarApi.link + "competitions/" + favouriteLeagueId + "/standings",
            { headers: { "X-Auth-Token": sideBarApi.token } });
        setFavouriteLeague(data.data.standings[0].table);
    };




    // Fetch User Info from Database when component is rendered
    useEffect(() => {
        if (currentUser) {
            // Database reference
            const userInfoRef = ref(database, 'users/' + currentUser.uid);

            // Take snapshop of database and store User info in state
            onValue(userInfoRef, snapshot => {
                const data = snapshot.val();
                // Store username in state
                setUsername(data.username);
                // Fetch data about favourite team
                fetchTeamInfo(data.favouriteTeam);
            });
        }
    }, [currentUser]);

    // Fetches Favourite Leagueue when favourite Team changes
    useEffect(() => {
       if (favouriteTeam) {
           fetchLeagueInfo(favouriteTeam);
       }
    }, [favouriteTeam]);


    console.log(favouriteTeam);

    return (

        <Router>
            
            <Navbar />
            <Routes>
                {/* Home Route */}
                <Route 
                    path="/" exact element={<Home username={username} favouriteTeam={favouriteTeam} 
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague}
                />} />

                {/* Leagues Route */}
                <Route 
                    path="/leagues" exact element={<LeaguesList username={username} favouriteTeam={favouriteTeam} 
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague}
                />} />

                {/* League Displayed Route */}
                <Route 
                    path="/leagues/:name" exact element={<LeagueDisplayed username={username} favouriteTeam={favouriteTeam} 
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague}/>} 
                />

                {/* Team Displayed Route */}
                <Route 
                    path="/club/:name" exact element={<TeamDisplayed username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />} 
                />

                {/* Match Search Route */}
                <Route 
                    path="/matchsearch" exact element={<MatchSearch username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />} 
                />

                {/* Match Displayed Route */}
                <Route 
                    path="/match" exact element={<MatchDisplayed username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />} 
                />

                {/* Login Route */}
                <Route path="/login" element={<Login />} />

                {/* Register Route */}
                <Route path="/register" element={<Register />} />

                {/* Odds Route */}
                <Route 
                    path="/odds" element={<Odds username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />} 
                />

                {/* League Displayed Route */}
                <Route 
                    path="/odds/:code_link" exact element={<OddsLeaguesDisplayed username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague}/>} 
                />

                {/* Game Week */}
                <Route 
                    path="/current_game_week_matches" element={<GameWeekMatches username={username} favouriteTeam={favouriteTeam}
                    favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />} 
                />

            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
