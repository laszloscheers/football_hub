import { format } from 'date-fns';
import { Card, Row, Col, Container } from "react-bootstrap";

import { clubCrests } from "../../apiKeys";
import './match.css';

const Match = ({ match, index }) => {
    //Formatting Time
    const gameDate = format(new Date(`${match.utcDate}`), 'dd-MM-yyyy');
    const gameTime = format(new Date(`${match.utcDate}`), 'k.mm');
    //Formatting Status of match
    const format1 = `${match.status}`.replace("_", " ")
    const format2 = format1.toLowerCase();
    return (
        <Container key={index+20}>
         <Card >
          <Card.Header>
           <Row className="match_headers">
            <Col sm={6} id='match_day_capitalise_card'> <b> {format2} </b></Col>
            <Col sm={6}> <b>{gameDate} </b></Col>                 
           </Row>
           </Card.Header >
            <Card.Body id="match_container">
             <Row>
              <Col sm={5} className='teams'>
               <img className='match_crests' src={clubCrests.link1 + match.homeTeam.id + clubCrests.link2}alt={"Image of " + match.homeTeam.name}></img>
               <h5>{match.homeTeam.name}</h5>
              </Col>
              <Col sm={2} className='teams' id='score'>
               <Card.Text id='match-time'> <h1>{match.score.fullTime.homeTeam && match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam && match.score.fullTime.awayTeam} </h1></Card.Text>
               <Card.Text className='match_text'> Kick Off </Card.Text>
               <Card.Text className='match_text'> {gameTime} (GMT+1) </Card.Text>
              </Col>
              <Col sm={5} className='teams'>
               <img className='match_crests' src={clubCrests.link1 + match.awayTeam.id + clubCrests.link2}alt={"Image of " + match.awayTeam.name}></img>
               <h5>{match.awayTeam.name}</h5>
              </Col>
             </Row>
            </Card.Body>
           </Card>
        </Container>
    );
};

export default Match;