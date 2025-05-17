import { useState, useEffect } from "react"

const n = 3
let isWon = false
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function GameBoard({ onSelect, gameInfo }) {
  const gameBoard = initialGameBoard
  const latestGameInfo = gameInfo[0]
  if (latestGameInfo) gameBoard[latestGameInfo.row][latestGameInfo.col] = latestGameInfo.player


  if (!isWon) {
    for (let i = 0; i < n; i++) {
      let cnt = 0
      for (let j = 0; j < n; j++) {
        if (!gameBoard[i][j]) break
        if (gameBoard[i][j] !== latestGameInfo.player) break
        cnt++
      }
      if (cnt === n) {
        alert('You won!')
        isWon = true
        break;
      }
    }
  }

  if (!isWon) {
    for (let j = 0; j < n; j++) {
      let cnt = 0
      for (let i = 0; i < n; i++) {
        if (!gameBoard[i][j]) break
        if (gameBoard[i][j] !== latestGameInfo.player) break
        cnt++
      }
      if (cnt === n) {
        alert('You won!')
        isWon = true
        break;
      }
    }
  }

  if (!isWon) {
    let cnt = 0
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) {
          if (!gameBoard[i][j]) break
          if (gameBoard[i][j] !== latestGameInfo.player) break
          cnt++
        }
      }
    }
    if (cnt === n) {
      alert('You won!')
      isWon = true
    }
  }

  if (!isWon) {
    let cnt = 0
    for (let i = 0; i < n; i++) {
      for (let j = n - 1; j >= 0; j--) {
        if (i + j === n - 1) {
          if (!gameBoard[i][j]) break
          if (gameBoard[i][j] !== latestGameInfo.player) break
          cnt++
        }
      }
    }
    if (cnt === n) {
      alert('You won!')
      isWon = true
    }
  }







  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelect(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button></li>)}
        </ol>
      </li>)}
    </ol>
  )
}
export default GameBoard