import './App.css';
import DivInputs from './component/div-inputs/div-inputs';
import DivResult from './component/div-result/div-result';
import Button from './component/button/button';
import React, { useState } from 'react';

function invertColor(colorHex) {
  let color = parseInt(colorHex.slice(1), 16);

  let red = color >> 16 & 255;
  let green = color >> 8 & 255;
  let blue = color & 255;

  red = 255 - red;
  green = 255 - green;
  blue = 255 - blue;

  red = red.toString(16).padStart(2, '0');
  green = green.toString(16).padStart(2, '0');
  blue = blue.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}

function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  //pesquisei sobre o useState para pegar os values em tempo real, não consegui fazer somente com props ou utilizando "document.query..." ou "document.get..."
  const label = "segredo";
  
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  const roloc = invertColor(color);
  
  return (
    <div className="App">
      <DivInputs value={text} onChange={(e) => setText(e.target.value.toUpperCase())} color={color} onColorChange={handleColorChange}/>
      <DivResult text={text} color={color}/>
      <Button color={color} roloc={roloc} label={`A label de botão é ${label}`}/>
    </div>
  );
}

export default App;