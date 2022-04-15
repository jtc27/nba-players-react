import {useEffect, useContext} from 'react'
import NbaContext from '../context/nba/NbaContext'

import defaultpic from '../images/missing-pic.png'

import {useParams, Link} from 'react-router-dom'

function PlayerProfile() {

  const {getPlayerProfile, player} = useContext(NbaContext)

  const params = useParams()

  useEffect(()=> {
    getPlayerProfile(params.id)
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

  // const {
  //     full_name,
  //     conference,
  //     division,
  //     abbreviation
  // } = player.team

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
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
              <img src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`} 
                onError={(event) => event.target.src = defaultpic} //default profile pic
                alt='Profile' />
                {/*profile pics from https://github.com/iNaesu/nba-headshot-api */}
              </figure>

              <div className='card-body justify-end'>
                <h4 className='card-title mb-0'>{id}<br></br>{id}</h4>
              </div>

            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {id}
    
              </h1>
              <p>bio</p>
              <div className='mt-4 card-actions'>
              bio
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>{first_name}</div>
                </div>

                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-lg stat-value'>
                  
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