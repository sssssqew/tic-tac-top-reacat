
import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"


function App() {
  const [gameInfo, setGameInfo] = useState([])
  function handleSelect(row, col) {
    // console.log(row, col)
    setGameInfo((prevGameInfo, index) => {
      // console.log(prevGameInfo.length)
      return [{
      row, col, player: prevGameInfo.length % 2 === 0 ? "X": "O"
    }, ...prevGameInfo]
  })
  }
  // console.log(gameInfo[0])

  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X"  isActive={gameInfo.length === 0 || gameInfo[0]?.player === "O"}/>
          <Player name="Player 2" symbol="O"  isActive={gameInfo[0]?.player === "X"}/>
        </ol>
        <GameBoard onSelect={handleSelect}  gameInfo={gameInfo}/>
      </div>
      <Log gameInfo={gameInfo}/>
    </main >
  )
}

export default App
