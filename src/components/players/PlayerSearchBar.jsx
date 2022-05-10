import { useState, useContext } from "react"
import NbaContext from "../../context/nba/NbaContext"
import Instructions from "../layout/Instructions"
// import AlertContext from "../../context/alert/AlertContext"

function PlayerSearchBar() {
  const [text, setText] = useState('')

  const {players, searchPlayers, clearPlayers} = useContext(NbaContext)
  // pulls the values from Context Provider that we want to use in this component

  // const {setAlert} = useContext(AlertContext)
  // // pulls the values from Context Provider that we want to use in this component

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text ==='') {
      // setAlert('Field is empty', 'error')
    } else {
      searchPlayers(text)

      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" 
              className="w-full pr-40 gb-white-200 input input-lg text-black" 
              placeholder='search'
              value={text}
              onChange={handleChange}
              />
              <button
              type ='submit'
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-blue-500 hover:bg-blue-700 text-white font-bold'>
              Go
              </button> 
            </div>
          </div>
        </form>

      </div>
      <div>

       {players.length >0 && (<button
            onClick={clearPlayers}
            className='btn btn-outline btn-lg'>
          Clear the list
         </button>)} 
         {/* clears a list of players */}

         {players.length === 0 && (<Instructions/>)} 

      </div>
    </div>
  )
}

export default PlayerSearchBar