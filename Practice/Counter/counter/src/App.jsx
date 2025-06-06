import { useState , useRef} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const step = useRef (1);

  const setStep = (value) =>{
    step.current=value;
  }

  const increment = () =>{
    setCount((state)=> state + step.current)
  }
  const decrement = () =>{
    setCount((state)=> state - step.current)
  }
  const reset = () =>{
    setCount(0)
  }

  return (
    <>
      <div className='heading'>
        <h1>Counter</h1>
      </div>
      <div className='buttons'>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className='incre'>
        <h2> Increment/Decrement by 
          <input 
          type="number"
          defaultValue={step.current}
          onChange={(e)=>setStep(e.target.valueAsNumber)}
          />
        </h2>
      </div>
      <div className='Redo'>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
