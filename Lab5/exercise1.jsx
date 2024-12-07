import React, { useState } from 'react';


function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setIsClicked(clickCount % 2 === 0);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{isClicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}


function MultiButtonApp() {
  const [lastClickedButton, setLastClickedButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setLastClickedButton(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      {lastClickedButton && 
        <p>Button #{lastClickedButton} was clicked</p>
      }
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ToggleButton />
      <MultiButtonApp />
      <Counter />
    </div>
  );
}