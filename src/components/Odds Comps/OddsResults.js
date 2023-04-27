import React, { useState } from 'react'
import { Row, Col, Container, Card} from 'react-bootstrap'
import { format } from 'date-fns'

import './oddsResults.css'

const OddsResults = (props) => {
  const { home_team, away_team, home_team_odds, away_team_odds, draw, title, date, competitionName } = props;

  //Formatting Time
  const gameDate = format(new Date(`${date}`), 'dd-MM-yyyy');
  const gameTime = format(new Date(`${date}`), 'k.mm');

  // Implied Probability Calculator
  const homeTeamProb = Math.round(`${1/home_team_odds*100}`);
  const awayTeamProb = Math.round(`${1/away_team_odds*100}`);
  const drawProb = Math.round(`${1/draw*100}`);

  //UseStates for earnings calculator and variables
  const [figure, setFigure] = useState('');
  const [oddsCalc, setOddsCalc] = useState('');
  const calcEarnings = (`${figure*oddsCalc}`);
  const potentialEarnings = parseFloat(calcEarnings).toFixed(2);

  return (
      <Container>
        {/* Container */}
        <Row id='odds_card_row'>
          <Col sm={10} id='odds_card_col_10'>
          <Card>
            {/* Comp Name & Date */}
            <Card.Header>
              <Row>
                <Col sm={6}> {competitionName} - Odds and Implied Probabilities </Col>
                <Col sm={6} className='odds_card_game_date'> {gameDate} </Col>
              </Row>
            </Card.Header>
            {/* Teams and Odds */}
            <Card.Body id='test'>
              <Row>
                <Col sm={9}>
                  <Card.Title>{home_team} </Card.Title>
                  <Card.Title> {away_team} </Card.Title>
                  <Card.Text>  @ {gameTime} </Card.Text>
                </Col>
                <Col sm={1} className='odds_card_result_nav'> 
                  <h6 className='odds_card_result'> Home </h6> 
                  <button className='odds_card_button' onClick={() => setOddsCalc(home_team_odds)}> {home_team_odds} </button>
                   <h6 className='odds_card_probability'> {homeTeamProb}% </h6>
                </Col>
                <Col sm={1} className='odds_card_result_nav'> 
                  <h6 className='odds_card_result'> Draw </h6> 
                  <button className='odds_card_button' onClick={() => setOddsCalc(draw)}> {draw} </button>
                   <h6 className='odds_card_probability'> {drawProb}% </h6>
                </Col>
                <Col sm={1} className='odds_card_result_nav'> 
                  <h6 className='odds_card_result'> Away </h6> 
                  <button className='odds_card_button' onClick={() => setOddsCalc(away_team_odds)}> {away_team_odds} </button>
                   <h6 className='odds_card_probability'> {awayTeamProb}% </h6>
                </Col>
              </Row>
              <br/>
              <Card.Text>
                 <span> These odds are provided by {title}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/*Earnings Calculator*/}
        <Col sm={2} id='odds_card_col_2'>
          <Card>
            <Card.Header> Earnings Calculator </Card.Header>
            <Card.Body id='test1'>
              <Card.Text>
                
                <form className='odds_card_form_input'>
                  <input 
                    id='odds_card_input'
                    placeholder='€€€'
                    type='number'
                    step='0.01'
                    min='0.01'
                    value={figure}
                    onChange={(e) => setFigure(e.target.value)}>
                  </input>
                </form>
                <br/>
                <span> At Stake: €{figure} </span>
                <br/>
                <br/>
                <span> Potential Return: €{potentialEarnings} </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>  
      <br/>
    </Container>
   )
}
export default OddsResults