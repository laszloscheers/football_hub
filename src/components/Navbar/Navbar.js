import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';

import "./navbar.css";
import { useAuth, logOutUser } from '../../firebase';




const Navbar = () => {

    // Get current user if logged in
    const currentUser = useAuth();

    // React-router-dom Method for pushing to different page
    const history = useNavigate()

    // Toggle value for opening and closing mobile menu
    const [toggle, setToggle] = useState(false);

    // Methods for toggling and closing mobile menu
    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setToggle(false);

    // Method for logging out User
    const handleLogOut = async e => {
        e.preventDefault();

        try {
            // LogOut User - Functionality imported from Firebase.js
            await logOutUser();
            window.location.reload();

        } catch {
            // Throw an alert if there were any problems - NB! fill out more later
            alert("There was a problem");
        }
    };



    
    return (
            <div className="navbarWrapper">
                <div className="navbarContainer">

                    {/* Logo Section */}
                    <div className="navbarLogo" onClick={handleClose}>
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                            <IoMdFootball className="navbarIcon" />
                            Football Hub
                        </Link>
                    </div>
                    

                    {/* Icon for toggling the Mobile Menu - hidden unless small screen */}
                    <div className="navbarToggle" onClick={handleToggle}>
                        {toggle ? <FaTimes className='navbarToggleIcon1' /> : <FaBars className='navbarToggleIcon2' />}
                    </div>


                    {/* Search Bar and Links - Put as a list for mobile menu */}
                    <ul className={toggle ? "navSection active" : "navSection"}>

                        {/* Home Link */}
                        <li className="linkContainer" onClick={handleClose}>
                                <Link to="/" className="navLink">
                                    Home
                                </Link>
                        </li>

                        {/* Live Scores Link */}
                        <li className="linkContainer" onClick={handleClose}>
                            <Link data-testid="leaguesLink" to="/leagues" className="navLink">
                                Leagues
                            </Link>
                        </li>
                        
                        {/* Live Scores Link */}
                        <li className="linkContainer" onClick={handleClose}>
                            <Link to="/current_game_week_matches" className="navLink">
                               Current Game Week
                            </Link> 
                        </li>

                        {/* Odds */}
                        <li className="linkContainer" onClick={handleClose}>
                            <Link data-testid="oddsLink" to="/odds" className="navLink">
                                Odds
                            </Link>
                        </li>

                        {/* Log In / Log Out Button */}
                        <li onClick={handleClose} className="signupContainer">
                            {currentUser ? (
                            <button data-testid="logoutLink" className="signupButton" onClick={handleLogOut}>
                                    Log Out
                                </button>
                            ) : (
                                <button data-testid="loginLink" className="signupButton" onClick={() => history("/login")}>
                                    Log In
                                </button>
                            )}
                            
                        </li>
                    </ul>
                </div>
            </div>
        
    );
};

export default Navbar;