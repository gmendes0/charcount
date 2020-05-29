import React, { useState } from 'react';

import "./style.css";

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <h1>Character Couter</h1>
      <p className='text'>Your text have <span className='characteres'>{text.length}</span> characters.</p>
      <textarea placeholder='Type here' onChange={event => setText(event.target.value)}>{text}</textarea>
    </div>
  );
}

export default App;
