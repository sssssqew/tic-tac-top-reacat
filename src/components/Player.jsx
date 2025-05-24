import {useState} from 'react'

function Player({name, symbol, isActive, onEditName}) {
  const [playerName, setPlayerName] = useState(name)
  const [isEditing, setIsEditing] = useState(false)

  function handleChange(e){
    setPlayerName(e.target.value)
  }
  function handleEdit() {
    setIsEditing(!isEditing)
    if(isEditing) onEditName(symbol, playerName)
  }
  
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={handleChange}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  )
}
export default Player 