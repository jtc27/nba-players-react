import {useEffect, useContext} from 'react'
import NbaContext from '../context/nba/NbaContext'

import defaultpic from '../images/missing-pic.png'

import {useParams, Link} from 'react-router-dom'

function PlayerProfile() {

  const {getPlayerProfile, getPlayerProfileTeam, player, player_team} = useContext(NbaContext)

  const params = useParams()

  useEffect(()=> {
    getPlayerProfile(params.id)
    getPlayerProfileTeam(params.id)
  },[])

  const {
    id,
    first_name,
    last_name,
    height_feet,
    height_inches,
    position,
    weight_pounds,
 
   } = player

   const {
    full_name
 
   } = player_team

  return (
    <>
    <div className='w-full mx-auto lg:w-10/12'>
    <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl image-full'>
              <figure>
              <img src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`} 
                onError={(event) => event.target.src = defaultpic} //default profile pic
                alt='Profile' />
                {/*profile pics from https://github.com/iNaesu/nba-headshot-api */}
              </figure> 

            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {first_name} {last_name}
    
              </h1>
              

            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                <div className='stat'>
                  <div className='stat-title text-md'>Height</div>
                  <div className='text-lg stat-value'>
                    {height_feet === null ? 'N/A' : height_feet + `' ` + height_inches + `"`} 
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Weight</div>
                  <div className='text-lg stat-value'>
                  {weight_pounds === null ? 'N/A' : weight_pounds + ` pounds`} 
                  </div>
                </div>   
            </div>
           
          <div className='w-full rounded-lg shadow-md bg-base-100 stats'></div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                <div className='stat'>
                  <div className='stat-title text-md'>Position</div>
                  <div className='text-lg stat-value'>
                    {(position === '') && 'N/A'}
                    {(position === 'F') && 'Forward'}
                    {(position === 'G') && 'Guard'}
                    {(position === 'C') && 'Center'}
                    </div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Team</div>
                  <div className='text-lg stat-value'>
                  {full_name} 
                  </div>
                </div>   
            </div>



          </div>
        </div>

    </div>
    </>
  )
}

export default PlayerProfile