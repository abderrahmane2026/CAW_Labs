import React, { useState } from 'react';


function DisplayTab({ initialTab }) {
  const [tab, setTab] = useState(initialTab);

  
  const removeElement = (indexToRemove) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      
      <ul>
        {tab.map((element, index) => (
          <li 
            key={index} 
            onClick={() => removeElement(index)}
          >
            Element {index + 1} is: {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["apple", "banana", "cherry", "date"];

  return (
    <div>
      <DisplayTab initialTab={table1} />
      <DisplayTab initialTab={table2} />
    </div>
  );
}