import React, { useEffect, useCallback } from "react";
import { useState } from "react";

import { format } from 'date-fns'
import { mapOddsLeagues } from "../../helperFunctions";
import { Container, Card, Row, Col } from "react-bootstrap";
import './currentGameWeek.css'
import { clubCrests } from "../../apiKeys";

const CurrentGameWeek = (props) => {
  const { home, away, time, leagueName, crestHome, crestAway, scoreAway, scoreHome } = props;
  const [ leagueTitle, setLeagueTitle ] = useState("")  

  //time formatting
  const gameDate = format(new Date(`${time}`), 'dd-MM-yyyy');
  const gameTime = format(new Date(`${time}`), 'k.mm');

  //League Titles
  const settingLeagueTitle = useCallback(() => {
    if (leagueName === 733) {
      setLeagueTitle(mapOddsLeagues[0].name)
    }
    else if (leagueName === 735){
     setLeagueTitle(mapOddsLeagues[5].name)
    }
    else if (leagueName === 757){
     setLeagueTitle(mapOddsLeagues[3].name)
    }
    else if (leagueName === 746){
     setLeagueTitle(mapOddsLeagues[2].name)
    }
    else if (leagueName === 742){
     setLeagueTitle(mapOddsLeagues[1].name)
    }
    else if (leagueName === 380){
     setLeagueTitle(mapOddsLeagues[4].name)
    }
    });

    useEffect(() => {
      settingLeagueTitle();
    }, [settingLeagueTitle])

  return(
    <Container >
      <Card >
        <Card.Header>
          <Row className="game_week_headers">
            <Col sm={6}> {leagueTitle} </Col>
            <Col sm={6} id='game_date_header'> {gameDate} </Col>
          </Row>
        </Card.Header >
        <Card.Body id="game_week_container">
          <Row>
            <Col sm={5} className='teams'>
              <img className='game_week_crests' src={clubCrests.link1 + crestHome + clubCrests.link2} alt={"Image of " + home} ></img>
              <h5>{home}</h5>
            </Col>
            <Col sm={2} className='teams'>
             <Card.Text id='curren_game_week_score'> {scoreHome} - {scoreAway} </Card.Text>
             <Card.Text className='match_text'> Kick Off </Card.Text>
             <Card.Text className='match_text'> {gameTime} (GMT+1) </Card.Text>
            </Col>
            <Col sm={5} className='teams'>
              <img className='game_week_crests' src={clubCrests.link1 + crestAway + clubCrests.link2}alt={"Image of " + away}></img>
              <h5>{away}</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CurrentGameWeek;