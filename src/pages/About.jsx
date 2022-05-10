import players from '../images/nba-players.jpg'

function About() {
  return (
    <>
    <div className='mb-6'> <img src={players} width='500'/> </div>

 
      <h1 className='text-4xl mb-4'>About NBA Player Search</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search NBA profiles and see profile details. This
        project uses the balldontlie API:
        <strong> 
        <a href='https://www.balldontlie.io/' target='_blank'>
          {' '}
          https://www.balldontlie.io/
        </a>{' '}</strong>
      </p>


      <p className='mb-4 text-2xl font-light'>
        Player images are taken from 
        <strong> 
        <a href='https://github.com/iNaesu/nba-headshot-api' target='_blank'>
          {' '}
          https://github.com/iNaesu/nba-headshot-api 
        </a>{' '}</strong>
      </p>

    </>
  )
}

export default About