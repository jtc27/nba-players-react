import {useEffect, useContext} from 'react'
import NbaContext from '../context/nba/NbaContext'

import defaultpic from '../images/missing-pic.png'

import {useParams, Link} from 'react-router-dom'

function PlayerProfile() {

  const {
    getPlayerProfile, 
    getPlayerProfileTeam, 
    getPlayerProfileStats,
    player, 
    player_team,
    player_stats,
  } = useContext(NbaContext)

  const params = useParams()

  useEffect(()=> {
    getPlayerProfile(params.id)
    getPlayerProfileTeam(params.id)
    getPlayerProfileStats(params.id)
  },[])

  const {
    first_name,
    last_name,
    height_feet,
    height_inches,
    position,
    weight_pounds,
   } = player

   const {
    full_name,
   } = player_team

   const {
    min,
    fgm,
    fga,
    fg_pct,
    fg3m,
    fg3a,
    fg3_pct,
    pts,
    ast,
    turnover,
    stl,
    blk,
    pf,
    season,
    games_played,
    ftm,
    fta,
    oreb,
    dreb,
    reb,
    ft_pct

   } = player_stats

  const per = ((
    (fgm * 85.91) + 
    (stl * 53.89) +
    (fg3m * 51.757) +
    (blk * 39.19) +
    (oreb * 39.19) +
    (ast * 34.677) +
    (dreb * 14.707) -
    (pf *17.174) -
    ((fta-ftm) * 20.091) -
    ((fga-fgm) * 39.19) -
    (turnover * 53.897)
    ) * (1 / parseInt(min))).toFixed(2)
    //https://www.sportsbettingdime.com/guides/how-to/calculate-per/

 
  return (
    <>
    <div className='w-full mx-auto lg:w-8/12'>
    <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-5 md:gap-8 '>
          <div className='custom-card-image'>
            <div className='rounded-lg shadow-xl image-full mt-5'>
              
              <img src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`} 
                onError={(event) => event.target.src = defaultpic} //default profile pic
                alt='Profile' />
                {/*profile pics from https://github.com/iNaesu/nba-headshot-api */}
            
            </div>
          </div>

          <div className='col-span-2 '>
            <div className='mb-3'>
              <h3 className='text-3xl card-title'>
                {first_name} {last_name} 
             
                {/* <img src={lal} width='70'/> */}
              </h3>
              <h3 className='text-xl font-italic'>{full_name}</h3>
              

            </div>

           

            <div className='w-full rounded-lg shadow-lg stats bg-gray-700 text-white'>
                <div className='stat '>
                  <div className='stat-title text-md'>Height</div>
                  <div className='text-lg stat-value '>
                    {height_feet === null ? 'N/A' : height_feet + `' ` + height_inches + `"`} 
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Weight</div>
                  <div className='text-lg stat-value'>
                  {weight_pounds === null ? 'N/A' : weight_pounds + ` pounds`} 
                  </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Position</div>
                  <div className='text-lg stat-value'>
                    {(position === '') && 'N/A'}
                    {(position === 'F') && 'Forward'}
                    {(position === 'G') && 'Guard'}
                    {(position === 'C') && 'Center'}
                    </div>
                </div>
            </div>
 
    
          <div className='w-full rounded-lg shadow-md bg-base-100 stats'></div>
          {player_stats === 'N/A' 
          ? <div></div>
          :
          //Shows Player info, if it is available.
            <> 
            <div className='mx-1 badge badge-lg badge-info'>{season} season</div>
            <div className='mx-1 badge badge-lg badge-warning'>{games_played} games played</div>
            <div className='mx-1 badge badge-lg badge-success'>{min} minutes per game </div>
            <div className='mx-1 badge badge-lg badge-secondary'>{per} PER </div>
              
            </>
          }
          
          </div>
        </div>
    </div>


    {/* PLAYER STATS */}
    {player_stats === 'N/A' 
    ? 
    //Error message if player stats api is undefined
    <div className='w-full mx-auto lg:w-8/12 mb-12'>
    <div className='w-full rounded-lg shadow-lg stats bg-orange-500 text-white'>
                <div className='stat'>
                  <div className='text-lg stat-value'>
                  Player Information is not available
          </div>
        </div>
    </div>
    </div>

    : 
    //Otherwise show player stats
    (
      <div className='w-full mx-auto lg:w-8/12'>

      <div className='w-full rounded-lg shadow-lg stats bg-orange-500 text-white'>
                <div className='stat'>
                  <div className='stat-title text-md'>Points per game</div>
                  <div className='text-lg stat-value'>
                  {pts}
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Assists</div>
                  <div className='text-lg stat-value'>
                  {ast} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Turnovers</div>
                  <div className='text-lg stat-value'>
                  {turnover} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Steals</div>
                  <div className='text-lg stat-value'>
                  {stl} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Blocks</div>
                  <div className='text-lg stat-value'>
                  {blk} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Fouls</div>
                  <div className='text-lg stat-value'>
                  {pf} 
                  </div>
                </div> 

            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {/* DIVISOR*/}</div>

            <div className='w-full rounded-lg shadow-lg stats bg-green-600 text-white'>
                <div className='stat'>
                  <div className='stat-title text-md'>Shots made</div>
                  <div className='text-lg stat-value'>
                  {fgm}
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Shot Attempts</div>
                  <div className='text-lg stat-value'>
                  {fga} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Field Goal %</div>
                  <div className='text-lg stat-value'>
                  {(fg_pct * 100).toFixed(2)} % 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>3P Made</div>
                  <div className='text-lg stat-value'>
                  {fg3m} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>3P Attempts</div>
                  <div className='text-lg stat-value'>
                  {fg3a} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>3P %</div>
                  <div className='text-lg stat-value'>
                  {(fg3_pct * 100).toFixed(2)} % 
                  </div>
                </div> 

            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {/* DIVISOR*/}</div>

            <div className='w-full rounded-lg shadow-lg stats bg-blue-500 text-white'>
                <div className='stat'>
                  <div className='stat-title text-md'>Offensive Reb</div>
                  <div className='text-lg stat-value'>
                  {oreb}
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Def Reb</div>
                  <div className='text-lg stat-value'>
                  {dreb} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>Total Reb</div>
                  <div className='text-lg stat-value'>
                  {reb} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>FT Made</div>
                  <div className='text-lg stat-value'>
                  {ftm} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>FT Attempts</div>
                  <div className='text-lg stat-value'>
                  {fta} 
                  </div>
                </div> 

                <div className='stat'>
                  <div className='stat-title text-md'>FT %</div>
                  <div className='text-lg stat-value'>
                  {(ft_pct * 100).toFixed(2)} % 
                  </div>
                </div> 

            </div>

    </div>
    )} 
    
   
 
    
    </>
  )
}

export default PlayerProfile