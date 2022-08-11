import React, { useState } from 'react';
import './App.css';

function App() {
  const [spent, setSpent] = useState([
    {description: 'food', amount: 400},
    {description: 'fruit', amount: 300}
  ]);

const handleClick = () => {
  setSpent([...spent, {
     description: document.getElementById("desc").value,
     amount: document.getElementById("amount").value
  }])
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  console.log(spent);
}; 


  return (
    <div className="App">
       <input placeholder='Description ' type="text" id="desc" />
       <input placeholder='Amount' type="text" id="amount" />
       <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
