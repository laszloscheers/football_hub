import {Link} from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { mapOddsLeagues } from '../../helperFunctions';
import '../Leagues/leagues.css'

const Odds = ({ username, favouriteTeam, favouriteFixtures, favouriteLeague }) => {

  return (
    <div>
        <div className='leagues'>
          {username && (
            <Sidebar username={username} favouriteTeam={favouriteTeam}
              favouriteFixtures={favouriteFixtures} favouriteLeague={favouriteLeague} />
         )}
              <div className="leaguesContainer">
                <div className='content' >
                  <div data-testid="oddsTitle" className='leagues-title' >
                    <h1>Leagues</h1>
                    <h3>SEASON 2021/2022</h3>
                  </div>
                </div>
                <div className='leagues-list' >
                {mapOddsLeagues.map((OddsLeague, index) => {
                   return (
                     <Link data-testid={"oddsOption" + index} to={'/odds/' + OddsLeague.code_link} state={OddsLeague.code_link} className="link" key={index}>
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
    </div>
  );
};

export default Odds;