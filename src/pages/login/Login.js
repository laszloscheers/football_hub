import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';
import { logInUser } from '../../firebase';



const Login = () => {

    // Setting up references for form inputs
    const emailRef = useRef();
    const passwordRef = useRef();

    // React-router-dom Method for pushing to different page
    const history = useNavigate()


    
    // Method for handling logging in user
    const handleLogin = async e => {
        e.preventDefault();

        try {
            // LogIn User - Functionality imported from Firebase.js
            await logInUser(emailRef.current.value, passwordRef.current.value);
            // Push user to HomePage if registration was successful
            history("/");

        } catch {
            // Throw an alert if there were any problems - NB! fill out more later
            alert("There was a problem");
        }
    }





    return (
        <div className='login'>

            <div className="signUpForm">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        {/* Login Logo */}
                        <h3 className="loginLogo">Football Hub</h3>

                        {/* Login Message */}
                        <span className="loginDesc">Log in for extra benifits</span>
                    </div>

                    <div className="loginRight" >
                        <form className="loginBox">
                            {/* Login Inputs */}
                            <input placeholder="Email" type="email" required className="loginInput" ref={emailRef} />
                            <input
                                placeholder="Password" type="password" required minLength="6" className="loginInput" ref={passwordRef}
                            />

                            {/* Login Button */}
                            <button data-testid="loginButton" className="loginButton" onClick={handleLogin} type="submit">
                                log in
                            </button>


                            {/* Register Button - Pushes to registration page */}
                            <button data-testid="registrationLink" className="loginRegisterButton" onClick={() => history("/register")}>
                                Create new Account
                            </button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;