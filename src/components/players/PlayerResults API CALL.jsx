import { useState, useEffect } from "react"

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
    <div className="grid xl:grid-cols-4">
      {players.map((player) => (
        <h3>{player.last_name}, {player.first_name} </h3>
      ))}
    </div>
  )
}

export default PlayerResults