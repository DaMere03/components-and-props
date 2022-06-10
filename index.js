import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;

function update() {
  counter++;
}

// Functional Component w/ Props
function Counter(props) {
  return <p>Counter: {props.number}</p>;
}

// Class Component w/ Props
class Counter2 extends React.Component {
  render() {
    return <p>Counter: {this.props.number}</p>;
  }
}

// Rendering Components & Props
function Counters() {
  return (
    <div>
      Functional Component
      <Counter number="1" />
      <br />
      Class Component
      <Counter2 number="0" />
      <br />
      <Counter number="3" />
      <Counter2 number="0" />
      <Counter number="5" />
    </div>
  );
}

// Rendering Component
const le = <Counters />;
ReactDOM.render(le, document.getElementById('root'));
