import "./Tic.css";
import { useState, useEffect } from "react";
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}
const TicTacToe = () => {
  const [squares, setSqaures] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const[status,setStatus]=useState('')

  //0,1,2
  //3,4,5
  //6,7,8

  function getWinner(){
    const WinningPatterns =[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]

    for(let i=0; i<WinningPatterns.length;i++){
      const[x,y,z]=WinningPatterns[i]
      if(squares[x] && squares[x] === squares[y]&& squares[x]===squares[z]){
        return squares[x]
      }
    }
    return null
  }
  // console.log(squares);
  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    if(getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSqaures(copySquares );
  }
  useEffect(() => {
  const winner = getWinner(squares);

  if (!winner && squares.every(item => item !== "")) {
    setStatus("This is a draw! Please restart the game");
  } else if (winner) {
    setStatus(`Winner is ${winner} Please restart the game`);
  } else {
    setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
  }
}, [squares, isXTurn]);


  return (
    <div className="tictactoe-container">
     <h1 style={{marginBottom:"5rem"}}>
        {status}
     </h1>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div> 
    
     
    </div>
  );
};

export default TicTacToe;
