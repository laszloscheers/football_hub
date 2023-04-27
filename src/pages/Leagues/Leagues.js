import {Link} from 'react-router-dom';
import './leagues.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import {mapOddsLeagues } from '../../helperFunctions';

const LeaguesList = ({ username, favouriteTeam, favouriteLeague, favouriteFixtures }) => {




    return (
        <>
            <div className='leagues'>
                {username && (
                    <Sidebar username={username} favouriteTeam={favouriteTeam}
                        favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
                )}

                <div className="leaguesContainer">
                    <div className='content' >
                        <div data-testid="leaguesTitle" className='leagues-title' >
                            <h1>Leagues</h1>
                            <h3>SEASON 2021/2022</h3>
                        </div>
                    </div>

                    <div className='leagues-list' >
                    {mapOddsLeagues.map((OddsLeague, index) => {
                   return (
                     <Link data-testid={"leaguesOption" + index} to={'/leagues/' + OddsLeague.name.toLowerCase()} state={OddsLeague.name.toLowerCase()} className="link" key={index}>
                       <div className="card-style">
                         <div className='card-body-style'>
                           <div>
                             <img src={OddsLeague.logo} className="card-child" alt={OddsLeague.name + ' logo'}></img>
                           </div>
                           <div>
                             <div className="card-child"> {OddsLeague.name}</div >  
                           </div>
                         </div>
                       </div>
                     </Link>
                    );
                    })
                    }
                    </div>
                </div>
            </div>

        </>
    );
};

export default LeaguesList;