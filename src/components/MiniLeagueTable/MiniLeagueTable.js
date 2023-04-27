import React from 'react';

import'./miniLeagueTable.css';


const MiniLeagueTable = ({ standings }) => {

   


    return (
        
        
        <div className='leagueTable'>
            
                <table className='table align-middle' style={{ border: "1px solid black", backgroundColor: "white", fontSize: "20px"}}>
                    <thead>
                        <tr>
                            <th scope="col">Pos</th>
                            <th scope="col">Club</th>
                            <th scope='col'>GP</th>
                            <th scope='col'>GD</th>
                            <th scope='col'>Pts</th>
                        </tr>
                    </thead>

                    <tbody>
                        {standings.map((team) => (
                            <tr className="teamRow">
                                <td>{team.position}.</td>
                                <td>
                                    <div className='smallCrestContainer'>
                                        <img className='smallCrest' src={team.team.crestUrl} alt="crest" />
                                    </div>
                                </td>
                                <td>{team.playedGames}</td>
                                <td>{team.goalDifference}</td>
                                <th scope="row">{team.points}</th>
                            </tr>
                        ))}
                    </tbody>

                </table>
        </div>
        
        
    );
};


export default MiniLeagueTable;