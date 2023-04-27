import React from 'react';



const Team = ({ team }) => {


    return (
        <div className='team'>
            <div className="info">
                <h3>{team.team.name}</h3>
                <h4>API id: {team.team.id}</h4>
                <p>Position: {team.position}</p>
                <p>Games Played: {team.playedGames}</p>
                <p>Points: {team.points}</p>
            </div>
        </div>
    );
};

export default Team;