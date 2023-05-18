import React from 'react';
import { Container, Table,Tab,Tabs } from 'react-bootstrap';
import LeagueMatches from '../All League Matches/LeagueMatches';
import Scroller from '../All League Matches/Scroll';
import LeagueTable from '../LeagueTable/LeagueTable';
import TopGoalScorer from '../Top Goal Scorers/TopGoalScorers';
import { mapLeagues} from '../../helperFunctions';

import './league.css'

const League = ({ competition, leagueTable, topScorersTable, matches }) => {
    //Finds the img for the competition
    const competitionSearch = Object.values(mapLeagues).find((competitionSearch) => {
        return competitionSearch.name.includes(competition.name.toLowerCase());
    });
    console.log(competition);
    console.log(leagueTable);
    console.log(topScorersTable);
    console.log(matches);
    return (
        <div className='league_table_titles'>
          <Container>
          <div className='leagueDisplayedHeroContainer'>
                  <div className='matchDisplayedHero leagueDisplayeHero'>
                      <div>
                          <div className='matchDisplayedImg leagueDisplayedImg'>
                              <img src={"../"+ competitionSearch.logo} alt={competition.name + ' logo'}></img>
                          </div>
                          <div>
                              <div id='league_title_leagues_page'><h2>{competition.name}</h2></div >
                          </div>
                          <div>
                              <div ><h4>{competition.area.name}</h4></div >
                          </div>
                      </div>
                  </div>
          </div>
          <Tabs defaultActiveKey="leagueTable" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="leagueTable" title="League Table">
          <div className="league_table_titles">
                <h3>{competition.name} Table</h3>
            </div>
            <Container>
              <Container>
                <Table id='league_table_header_cont'>
                  <thead>
                  <tr>
                    <th id='league_table_headers_pos' scope='row'>Pos</th>
                    <th className='league_table_headers'></th>
                    <th className='league_table_headers_name'></th>
                    <th className='league_table_headers' id='left_hand_text'>GP</th>
                    <th className='league_table_headers'>W</th>
                    <th className='league_table_headers'>D</th>
                    <th className='league_table_headers'>L</th>
                    <th className='league_table_headers'>GF</th>
                    <th className='league_table_headers'>GA</th>
                    <th className='league_table_headers'>GD</th>
                    <th className='league_table_headers'>Pts</th>
                  </tr>
                  </thead>
                </Table>
              </Container> 
              <LeagueTable standings={leagueTable}/>
            </Container>
          </Tab>
          <Tab eventKey="topScorers" title="Tops Scorers">
            <div className="clubs">
                  <h3 className='league_table_titles'>Top Goal Scorers</h3>
                  <Container>
                  <Container>
                    <Table id='top_gs_table'>
                      <thead>
                      <tr>
                        <th className='top_gs_title'> Name </th>
                        <th className='top_gs_title'> Goals Scored </th>
                        <th className='top_gs_title'> Club </th>
                      </tr>
                      </thead>
                      </Table>
                    </Container>
                    {topScorersTable.map((topScorer, index) => <TopGoalScorer topScorer={topScorer} key={index} />)}
                </Container>
              </div> 
          </Tab>
          <Tab eventKey="resultsAndFixures" title="Results and Fixtures">
    
            <br></br><Container>
                <h3 className='league_table_titles'>Results and Fixtures</h3>  
              </Container>
            <Container id="allMatches">
              <Container>
                {matches.map((leagueMatch, index) => <LeagueMatches leagueMatch={leagueMatch} key={index} />)}  
              </Container>
            </Container>   
            <Scroller/>
          </Tab>

          </Tabs>
          </Container>
        </div>
    );
};

export default League;