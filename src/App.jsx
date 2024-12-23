import './App.css';

import { useState } from 'react';

function FunctionApp() {
  const [counter, setCounter] = useState(0); //[상태, 상태함수]
  const [inputValue, setInputValue] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const setCounterNumber = () => {
    setCounter(inputValue);
  }

  return (
    <>
      {/* <div>counter : {counter}</div> */}
      <Count counter={counter}/>
      <PlusButton
        setCounter={setCounter}
        incrementCounter={incrementCounter}
      />
      <MinusButton 
        setCounter={setCounter} 
        decrementCounter={decrementCounter}
      />
      <CounterInput 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        // setCounter={setCounter}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function CounterInput({inputValue, setInputValue, setCounter, setCounterNumber}){
  return(
    <>
      <input type='number'
              value={inputValue}
              onChange={(event)=> setInputValue(event.target.value)}
      />
      {/* <button onClick={()=> setCounter(inputValue)}>입력</button> */}
      <button onClick={setCounterNumber}>입력</button>
    </>
  )
}

function PlusButton({setCounter, incrementCounter}){
  return (
  <button onClick={() => {setCounter((prev)=>prev+1);}}>+</button>
  );
}

function MinusButton({setCounter, decrementCounter}){
  return (
    <button onClick={() => {setCounter((prev)=>prev-1);}}>-</button>
    );
  }

function Count({counter}) {
  return <div>counter : {counter}</div>
}

// import { Component } from 'react';

// class ClassApp extends Component {
//   state = { counter: 0 }

//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <PlusButton incrementCounter={this.incrementCounter} />
//         <MinusButton decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class PlusButton extends Component {
//   render() {
//     return (
//       <button onClick={this.props.incrementCounter}>+</button>
//     );
//   }
// }

// class MinusButton extends Component {
//   render() {
//     return (
//       <button onClick={this.props.decrementCounter}>-</button>
//     );
//   }
// }

// class Count extends Component {
//   render() {
//     return <div>Counter : {this.props.counter}</div>;
//   }
// }

export default FunctionApp;
// export default ClassApp;
