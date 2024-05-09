import React, { useState } from 'react';
import './App.css'
import KeyBoard from './components/Keyboard';
function App() {
  let [value,setValue] = useState("")
  return (
    <div className="App">
      <KeyBoard value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
