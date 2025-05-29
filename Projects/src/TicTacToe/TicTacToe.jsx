import React from "react";

const TicTacToe = () => {
  function Square({value}) {
    return <button>{value}</button>;
  }
  return (
    <div className="tictactoe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default TicTacToe;
