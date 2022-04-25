import PlayerResults from "../components/players/PlayerResults"
import PlayerSearchBar from "../components/players/PlayerSearchBar"

function Home() {
  return (
    <div>
      <PlayerSearchBar/>
      <PlayerResults/> 
    </div>
  )
}

export default Home