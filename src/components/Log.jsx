// 새로 추가되는 li 요소에 애니메이션이 적용됨
// key 를 index 로 하면 리액트는 새로 추가되는 요소가 맨 아래쪽이라고 생각해서 맨 아래쪽 요소에 애니메이션이 적용됨
// key 를 row, col 조합으로 하면 새로 추가되는 요소가 맨 처음이라고 생각해서 맨 위쪽 요소에 애니메이션이 적용됨

function Log({gameInfo, players}){
  return (
    <ol id="log">
      {gameInfo.map((log, index) => <li key={`${log.row}${log.col}`}>{`${players[log.player]} (${log.player}) - (${log.row}, ${log.col})`}</li>)}
    </ol>
  )
}
export default Log