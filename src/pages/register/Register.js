import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './register.css';
import { registerUser, setUserInfo } from '../../firebase';




const Register = () => {

    const [secondPage, setSecondPage] = useState(false);
    const [userUid, setUserUid] = useState("");
   



    // Setting up references for form inputs
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordVerifyRef = useRef();
    const favouriteTeamRef = useRef();
    
    // React-router-dom Method for pushing to different page
    const history = useNavigate()



    // Method for handling registration of a user
    const handleRegistration = async e => {
        e.preventDefault();

        // Check that 2 passwords are the same - if not throw an alert
        if (passwordVerifyRef.current.value !== passwordRef.current.value) {
            // Send Invalidation message if they dont match
            alert("Passwords don't match");

        } else {
            try {
                // Register User - Functionality imported from Firebase.js
                const data = await registerUser(emailRef.current.value, passwordRef.current.value);
                setUserUid(data.user.uid);

                // Reset Input fields
                emailRef.current.value = "";
                passwordRef.current.value = "";

                // Push user to HomePage if registration was successful
                setSecondPage(true);

            } catch {
                // Throw an alert if there were any problems - NB! fill out more later
                alert("There was a problem");
            }
        }
    };


    // Method for saving users favourite team and username to firebase database
    const handleSetUserInfo = async e => {
        e.preventDefault();

        setUserInfo(userUid, usernameRef.current.value, favouriteTeamRef.current.value);
        
        // Push user to HomePage if registration was successful
        history("/");
    };

    



    if (!secondPage) {
        return (
            <div className="register">

                <div className='signUpForm'>
                    <div className="loginWrapper">
                        <div className="loginLeft">
                            {/* Register Logo */}
                            <h3 className="loginLogo">Football Hub</h3>

                            {/* Register Message */}
                            <span className="loginDesc">Sign up for extra benefits!!</span>
                        </div>

                        <div className="loginRight">
                            <form className="loginBox">
                                {/* Register Inputs */}
                                <input placeholder="Email"  required ref={emailRef} className="loginInput" type="email" />
                                <input data-testid="password" placeholder="Password" required ref={passwordRef} className="loginInput" type="password" minLength="6" />
                                <input data-testid="verify" placeholder="Verify Password" required ref={passwordVerifyRef} className="loginInput" type="password" />

                                {/* Register Button - Handles Registration */}
                                <button data-testid="registerButton" className="loginButton" onClick={handleRegistration} type="submit">Sign Up</button>

                                {/* Login Button - Switches to Login Page */}
                                <button data-testid="backToLogin" className="loginRegisterButton" onClick={() => history("/login")}>Log Into Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="register">

                <div className='signUpForm'>
                    <div className="loginWrapper">
                        <div className="loginLeft">
                            {/* Register Logo */}
                            <h3 className="loginLogo">Football App</h3>

                            {/* Register Message */}
                            <span className="loginDesc">Get updates on your favourite team</span>
                        </div>

                        <div className="loginRight">
                            <form className="loginBox">
                                {/* Register Inputs */}
                                <input placeholder="Username" required ref={usernameRef} className="loginInput" type="text" />
                                <input placeholder="Favourite Team" required ref={favouriteTeamRef} className="loginInput" type="text" />

                                {/* Register Button - Handles Registration */}
                                <button className="loginButton" onClick={handleSetUserInfo} type="submit">Submit</button>

                                {/* Login Button - Switches to Login Page */}
                                <button className="loginRegisterButton" onClick={() => history("/login")}>Log Into Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
};



export default Register;