import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("")

  const lowerCase = () => {
    setText(text.toLowerCase());
  }
  const upperCase = () => {
    setText(text.toUpperCase());
  }
  const camelCase = () => {
    setText(text.toCamelCase());
  }
  const pascalCase = () => {
    setText(text.toLowerCase());
  }
  const snakeCase = () => {
    setText(text.toLowerCase());
  }
  const kebabCase = () => {
    setText(text.toLowerCase());
  }
   const display = () =>{
   }

  return (
    <>
      <h1>String Tranformers</h1>
      <div>
        <textarea name="text"></textarea>
      </div>
      <div>
        <button onClick={lowerCase}>Lower case</button>
        <button onClick={upperCase}>Upper case</button>
        <button>Camel case</button>
        <button>Pascal case</button>
        <button>Snake case</button>
        <button>Kebab case</button>
      </div>
      <div>
        <h1>Tranformed String</h1>
      </div>
    </>
  );
}

export default App;
