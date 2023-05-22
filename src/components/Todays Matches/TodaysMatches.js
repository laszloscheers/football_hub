import { Row, Col, Container, Card } from 'react-bootstrap';
import { format } from 'date-fns';
import {Link} from 'react-router-dom';
import { clubCrests } from '../../apiKeys';
import './todaysmatches.css'
const TodaysMatches = ({ match}) => {
    //Formatting Time
    const gameDate = format(new Date(`${match.utcDate}`), 'dd-MM-yyyy');
    const gameTime = format(new Date(`${match.utcDate}`), 'k.mm');
    //Formatting Status of match
    const format1 = `${match.status}`.replace("_", " ")
    const format2 = format1.toLowerCase();

    return (
        <div>
            <Link id='today_match_link'to={'/match'} state={match}>
            <Container id='match_container'>
          <Card >
              <Card.Header>
              <Row className="game_week_headers">
                  <Col sm={6} id='match_day_capitalise'> {format2}</Col>
                  <Col sm={6} id='game_date_header'> {gameDate} </Col>
              </Row>
              </Card.Header >
              <Card.Body id='today_match_body'>
              <Row>
                  <Col sm={5} className='teams'>
                  <img className='club_crests_today_match' src={clubCrests.link1 + match.homeTeam.id + clubCrests.link2} alt={"Image of " + match.homeTeam.name}></img>
                  <h5 className='match_team_names'>{match.homeTeam.name}</h5>
                  </Col>
                  <Col sm={2} className='teams'>
                    <Card.Text id='match_time'> {match.score.fullTime.home} - {match.score.fullTime.away} </Card.Text>
                    <Card.Text className='match_text'> Kick Off </Card.Text>
                    <Card.Text className='match_text'> {gameTime} (GMT+1) </Card.Text>
                  </Col>
                  <Col sm={5} className='teams'>
                  <img className='club_crests_today_match' src={clubCrests.link1 + match.awayTeam.id + clubCrests.link2} alt={"Image of " + match.awayTeam.name}></img>
                  <h5 className='match_team_names'>{match.awayTeam.name}</h5>
                  </Col>
              </Row>
              </Card.Body>
          </Card>
         </Container>
            </Link>
        </div>
    );
};

export default TodaysMatches;