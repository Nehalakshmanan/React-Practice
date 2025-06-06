import "./Accordian.css"
import Accordian from "./Accordian";
import questions from "./data";
import { useState } from "react";

function App() {

  const [multiple, setMultiple] = useState(true)
  const[openAccordianId, setOpenAccordianId] = useState("null")
   
  const setIdOfOpenAccordian = (id=null) =>{
    setOpenAccordianId(multiple ? null : id)
  }
   
  const onMultipleChange = ()=>{
    if(multiple){
      setOpenAccordianId(-1)
    }
    setMultiple(!multiple)
  }

  return (
    <>
      <div className="App">
          <h4>
            <label>Is multiple open accordian allowed?</label>
            <input 
            type="checkbox" 
            checked={multiple}
            onChange={onMultipleChange}
            />
          </h4>
     
        <div>
          {questions.map((question)=>(
            <Accordian
            key={question.id}
            multiple={multiple}
            openAccordianId={openAccordianId}
            setIdOfOpenAccordian={setIdOfOpenAccordian}
            {...question}
             />
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
