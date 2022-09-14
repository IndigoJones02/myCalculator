import { useState } from 'react';

function App() {
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalculation = value => {
    if (
      ops.includes(value) && calculation === '' ||
      ops.includes(value) && ops.includes(calculation.slice(-1))
    ) {
      return;
    }
    setCalculation(calculation + value);
    if (!ops.includes(value)) {
      setResult(eval(calculation+value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculation(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalculation(eval(calculation).toString());
  }

  const deleteLast = () => {
    if (calculation == '') {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  }


  return (
    <div className="App">
      <div className="fi-calculator">
          <div className="fi-display">

            {result ? <span>({result})</span> : ''}
            {calculation || "0"}
          </div>
          <div className="fi-operators">
              <button onClick={() => updateCalculation('/')}>/</button>
              <button onClick={() => updateCalculation('*')}>*</button>
              <button onClick={() => updateCalculation('+')}>+</button>
              <button onClick={() => updateCalculation('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="fi-digits">
              { createDigits() }
              <button onClick={() => updateCalculation('0')}>0</button>
              <button onClick={() => updateCalculation('.')}>.</button>
              <button onClick={calculate}>=</button>

          </div>

      </div>
    </div>
  );
}

export default App;
