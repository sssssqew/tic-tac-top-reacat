function GameOver({winner, isDraw, onRestart}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {isDraw ? <p>It is a draw :</p> : <p>{winner} won</p>}
      <p><button onClick={onRestart}>Rematch!</button></p>
    </div>
  )
}
export default GameOver