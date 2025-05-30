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
  // console.log(squares);
  function handleClick(getCurrentSquare) {
    let copySquares = [...squares];
    if(copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSqaures(copySquares);
  }

  return (
    <div className="tictactoe-container">
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
