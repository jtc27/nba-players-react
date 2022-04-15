import { useState, useEffect } from "react"
import PlayerItem from "./PlayerItem"
import NbaContext from "../../context/nba/NbaContext"
import { useContext } from "react"

function PlayerResults() {

  const {players, getPlayers} = useContext(NbaContext)

  // useEffect(()=> {
  //   getPlayers()
  // })

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