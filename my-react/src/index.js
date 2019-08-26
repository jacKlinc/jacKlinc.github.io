import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) { // this replaces the class as there is no need for state changes anymore
    return ( // this displays the value in each box
      <button className="square" onClick={() => props.onClick() }>
        {props.value}
      </button>
    ); // => is an arrow function, concise function definition
}

// *** Events: upon an event on[Event] is used and the resulting action is handle[Event]
  
class Board extends React.Component { // parent component
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xNext: true, // X is the first to go
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // slice copies the array 
    if (calculateWinner(squares) || squares[i]) { // winner or is it full
      return; // nothing 
    }
    squares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xNext: !this.state.xNext, // sets opposite each turn
    }); // this stores the state in the board
  } // the square components are 'controlled components' now

  // copying the array makes for 'pure compnonents' with immutable data

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} // Board now knows which square is clicked
        onClick={() => this.handleClick(i)} // square updates board's state
      /> // the prop here is i
    );
  }
  
  render() {
    const winner = calculateWinner(this.state.squares);
    let status; // let declares a block scope local variable

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
  }
  
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) { // this helper function determines the winner
  const lines = [ // potential wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  
  // ========================================
  
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  