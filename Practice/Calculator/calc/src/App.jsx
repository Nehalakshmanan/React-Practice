import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [value, setValue]= useState("")
  const handleClick = (num) => {
    setValue(value+num)
    }
  const clear = () => {
    setValue("")
  }
  const submit = () => {
    try{
      setValue(eval(value).toString());
    } catch(error) {
      setValue('error');
    }
  }
  return (
    <div>
      <input type="text" value={value} />
      <button onClick={clear}>AC</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('9')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={submit}>=</button>
    </div>
  );
};

export default App;
