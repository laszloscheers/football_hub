import React from 'react';
import { Table, Container, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { clubCrests } from '../../apiKeys';
import './topGoalScorers.css'
const TopGoalScorer = ({ topScorer }) => {

    return (
        <Container>
         <Table id='top_scorer_table'>
            <tbody id='asd'>
              <tr>
               <td className='top_scorer_row'> <div className='top_scorer_data'>{topScorer.player.name}</div></td>
               <td className='top_scorer_row'> <div className='top_scorer_data'>{topScorer.numberOfGoals}</div></td>
               <td className='top_scorer_row' id='top_scorer_crest_name'>
                  <img className='top_scorer_club_crest' src={clubCrests.link1 + topScorer.team.id + clubCrests.link2}></img>
                  <Link id='top_scorer_link' to={'/club/' + topScorer.team.name} state={topScorer.team.name.toLowerCase()}><div id='ppp'>{topScorer.team.name}</div></Link> 
                </td>
              </tr>
            </tbody>
            </Table>
         </Container>
             );
        };

export default TopGoalScorer;