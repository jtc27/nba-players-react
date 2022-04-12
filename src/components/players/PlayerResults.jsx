import { useState, useEffect } from "react"
import PlayerItem from "./PlayerItem"

function PlayerResults() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetchPlayers()
  },[])

  const fetchPlayers = async () => {
    const res = await fetch(`https://www.balldontlie.io/api/v1/players`)

    const data = await res.json()

    setPlayers(data.data)
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {players.map((player) => (
        <PlayerItem 
        key={player.id} 
        player={player}
        />
      ))}
    </div>
  )
}

export default PlayerResults