import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Table, Row, Col } from 'react-bootstrap';
import './leagueTable.css';

const LeagueTable = ({ standings }) => {
    return (
        <Container id='league_table_container'>
         {standings.map((team, index) => (
          <Table responsive id='top_scorer_table' key={index}>
            <tbody>
             <tr>
                <th id='league_table_position' scope="row"><div className='league_table_data'>{team.position}</div></th>
                <td className='league_table_columns'><img className='club_crests_table' src={team.team.crestUrl}></img></td>
                <th id='league_table_club_name'><Link id='league_table_link' to={'/club/' + team.team.name} state={team.team.name.toLowerCase()}><div className='league_table_data'>{team.team.name}</div></Link></th>
                <th className='league_table_columns'scope="row"><div className='league_table_data'>{team.playedGames}</div></th>
                <td className='league_table_columns'><div className='league_table_data'>{team.won}</div></td>
                <td className='league_table_columns'><div className='league_table_data'>{team.draw}</div></td>
                <td className='league_table_columns'><div className='league_table_data'>{team.lost}</div></td>
                <td className='league_table_columns'><div className='league_table_data'>{team.goalsFor}</div></td>
                <td className='league_table_columns'><div className='league_table_data'>{team.goalsAgainst}</div></td>
                <td className='league_table_columns'><div className='league_table_data'>{team.goalDifference}</div></td>
                <th className='league_table_columns' scope="row"><div className='league_table_data'>{team.points}</div></th>
             </tr>
            </tbody>
          </Table> 
         ))}
        </Container>
    );
};

export default LeagueTable;

