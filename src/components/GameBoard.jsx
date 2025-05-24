import { useState, useEffect } from "react"

let isWon = false
let gameBoard = null

function GameBoard({ onSelect, latestGameInfo, n, players }) {
  if (latestGameInfo) {
    gameBoard[latestGameInfo.row][latestGameInfo.col] = latestGameInfo.player
  } else {
    gameBoard = new Array(n).fill(0).map(el => new Array(n).fill(null))
  }


  if (!isWon) { // 행
    for (let i = 0; i < n; i++) {
      let cnt = 0
      for (let j = 0; j < n; j++) {
        if (!gameBoard[i][j]) break
        if (gameBoard[i][j] !== latestGameInfo.player) break
        cnt++
      }
      if (cnt === n) {
        alert(`${players[latestGameInfo.player]} (${latestGameInfo.player}) won!`)
        isWon = true
        break;
      }
    }
  }

  if (!isWon) { // 열
    for (let j = 0; j < n; j++) {
      let cnt = 0
      for (let i = 0; i < n; i++) {
        if (!gameBoard[i][j]) break;
        if (gameBoard[i][j] !== latestGameInfo.player) break;
        cnt++
      }
      if (cnt === n) {
        alert(`${players[latestGameInfo.player]} (${latestGameInfo.player}) won!`)
        isWon = true
        break;
      }
    }
  }

  if (!isWon) { // 왼쪽 대각선
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
      alert(`${players[latestGameInfo.player]} (${latestGameInfo.player}) won!`)
      isWon = true
    }
  }

  if (!isWon) { // 오른쪽 대각선
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
      alert(`${players[latestGameInfo.player]} (${latestGameInfo.player}) won!`)
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