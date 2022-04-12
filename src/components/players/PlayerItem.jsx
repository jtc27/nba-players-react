import {Link} from 'react-router-dom' 
import profile from '../../images/missing-pic.png'

function PlayerItem({player: {
  //destructured
  id,
  first_name,
  last_name,

  //further destructuring of team object inside
  team: {
    full_name
  }
  }
  }) 
{
  return (
    <div className='card shadow-md compact side bg-base-100 text-black'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <Link
              className='text-base-content text-opacity-40'
              to={`/player/${id}`}
              >
                <img src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`} 
                onError={(event) => event.target.src = profile} //default profile pic
                alt='Profile' />
                {/*profile pics from https://github.com/iNaesu/nba-headshot-api */}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            className='text-base-content text-opacity-100'
            to={`/player/${id}`}
          >
            <h2 className='card-title'>{last_name}, {first_name}</h2>
          </Link>
          <div className='text-base-content text-opacity-70'>
            {full_name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerItem