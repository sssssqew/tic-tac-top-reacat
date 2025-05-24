
import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

let size = null // size of board

function App() {
  const [gameInfo, setGameInfo] = useState([])
  function handleSelect(row, col) {
    setGameInfo((prevGameInfo, index) => {
      return [{
        row, col, player: prevGameInfo.length % 2 === 0 ? "X" : "O"
      }, ...prevGameInfo]
    })
  }

  if(!size){
    do{
      size = parseInt(prompt('Decide game board size you want (below 17)', 3))
    }while(size > 17)
  }

  const lastGameInfo = gameInfo[0]


  return (
    <main>
      <div id="game-container" style={{maxWidth: `${45 + size * 5}rem`}}>
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={gameInfo.length === 0 || lastGameInfo?.player === "O"} />
          <Player name="Player 2" symbol="O" isActive={lastGameInfo?.player === "X"} />
        </ol>
        <GameBoard onSelect={handleSelect} latestGameInfo={lastGameInfo} n={size} />
      </div>
      <Log gameInfo={gameInfo} />
    </main >
  )
}

export default App
