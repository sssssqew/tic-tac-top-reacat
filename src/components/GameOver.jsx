function GameOver({winner, isDraw}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {isDraw ? <p>It is a draw :</p> : <p>{winner} won</p>}
      <p><button>Rematch!</button></p>
    </div>
  )
}
export default GameOver