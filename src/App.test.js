import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { footballApi, footballApi1, sideBarApi } from './apiKeys';

jest.mock('axios');

test('can access login page', () => {
  render (<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");

  // Verify that we can access login Page
  fireEvent.click(loginLink);
  const loginInput = screen.getByPlaceholderText(/email/i)
  expect(loginInput).toBeInTheDocument();
});


test('can access registration page', () => {
  render(<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");
  // Navigate To Login Page
  fireEvent.click(loginLink);
  
  // Verfiy that we can access the registration page
  const registrationLink = screen.getByTestId("registrationLink");
  fireEvent.click(registrationLink);
  const backToLoginLink = screen.getByTestId("backToLogin");
  expect(backToLoginLink).toBeInTheDocument();
});


test('can change inputs in Login Form', () => {
  render(<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");
  // Navigate to Login Page
  fireEvent.click(loginLink);
  
  // Set test Values and grab inputs
  const testEmailValue = "testEmail";
  const testPasswordValue = "testPassword";
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  // Change input value and verify
  fireEvent.change(emailInput, { target: { value: testEmailValue } });
  expect(emailInput.value).toBe(testEmailValue);
  fireEvent.change(passwordInput, { target: { value: testPasswordValue } });
  expect(passwordInput.value).toBe(testPasswordValue);
});


test('can change inputs in registration form', () => {
  render(<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");
  // Navigate To Login Page
  fireEvent.click(loginLink);
  // Navigate to Registration Page
  const registrationLink = screen.getByTestId("registrationLink");
  fireEvent.click(registrationLink);

  // Set test Values and grab inputs
  const testEmailValue = "testEmail";
  const testPasswordValue = "testPassword";
  const testVerifyValue = "testVerify";
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByTestId("password");
  const verifyInput = screen.getByTestId("verify");

  // Change Input value and verify
  fireEvent.change(emailInput, { target: { value: testEmailValue } });
  expect(emailInput.value).toBe(testEmailValue);
  fireEvent.change(passwordInput, { target: { value: testPasswordValue } });
  expect(passwordInput.value).toBe(testPasswordValue);
  fireEvent.change(verifyInput, { target: { value: testVerifyValue } });
  expect(verifyInput.value).toBe(testVerifyValue);
});


// NOT FINISHED
/*
test('email required by form', async () => {
  render(<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");
  // Navigate To Login Page
  fireEvent.click(loginLink);
  // Navigate to Registration Page
  const registrationLink = screen.getByTestId("registrationLink");
  fireEvent.click(registrationLink);

  // Set test Values and grab inputs
  const emailInput = screen.getByPlaceholderText(/email/i);
  const testPasswordValue = "testPassword";
  const testVerifyValue = "testVerify";
  const passwordInput = screen.getByTestId("password");
  const verifyInput = screen.getByTestId("verify");

  // Update all inputs except username
  fireEvent.change(passwordInput, { target: { value: testPasswordValue } });
  fireEvent.change(verifyInput, { target: { value: testVerifyValue } });
  
});
*/
/*
test("user can login", async () => {
  render(<App />);

  // Get Login Link
  const loginLink = screen.getByTestId("loginLink");
  // Navigate to Login Page
  fireEvent.click(loginLink);

  // Set test Values and grab inputs
  const testEmailValue = "pedro@gmail.com";
  const testPasswordValue = "123456";
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  // Change Input values
  fireEvent.change(emailInput, { target: { value: testEmailValue } });
  expect(emailInput.value).toBe(testEmailValue);
  fireEvent.change(passwordInput, { target: { value: testPasswordValue } });
  expect(passwordInput.value).toBe(testPasswordValue);
  
  // Verify Login worked
  const loginButton = screen.getByTestId("loginButton");
  fireEvent.click(loginButton);
})
*/


test("can access leagues page", () => {
  render(<App />);

  // Get Leagues Link
  const leaguesLink = screen.getByTestId("leaguesLink");
  // Navigate To Leagues Page
  fireEvent.click(leaguesLink);

  // Validate we access leagues page
  const leaguesTitle = screen.getByTestId("leaguesTitle");
  expect(leaguesTitle).toBeInTheDocument();

  // Find link for Premier League
  const premLeaguesLink = screen.getByTestId("leaguesOption0");
  fireEvent.click(premLeaguesLink);

  const leaguesResults = screen.getByTestId("leagueLoading");
  expect(leaguesResults).toBeInTheDocument();
});


test ("can access odds page", () => {
  render(<App />);

  // Get Leagues Link
  const oddsLink = screen.getByTestId("oddsLink");
  // Navigate To Leagues Page
  fireEvent.click(oddsLink);

  // Validate we access odds page
  const oddsTitle = screen.getByTestId("oddsTitle");
  expect(oddsTitle).toBeInTheDocument();

  // Find link for Premier League
  const premOddsLink = screen.getByTestId("oddsOption0");
  fireEvent.click(premOddsLink);

  const oddsResults =  screen.getByTestId("oddsLoading");
  expect(oddsResults).toBeInTheDocument();
}); 




