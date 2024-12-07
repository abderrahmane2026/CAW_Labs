import React, { useState } from 'react';

function DivCreator() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiv = {
      height: `${height}px`,
      width: `${width}px`,
      backgroundColor: bgColor
    };
    setDivs([...divs, newDiv]);
    
  
    setHeight('');
    setWidth('');
    setBgColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          required
        />
        <button type="submit">Create Div</button>
      </form>

      <div>
        {divs.map((div, index) => (
          <div 
            key={index} 
            style={{
              height: div.height, 
              width: div.width, 
              backgroundColor: div.backgroundColor,
              margin: '10px',
              border: '1px solid black'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DivCreator;