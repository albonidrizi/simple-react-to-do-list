import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);

  function handleItem(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setInputList((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputList.map((input) => (
            <li>{input}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
