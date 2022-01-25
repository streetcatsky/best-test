import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomInputNumber from './components/CustomInputNumber';

function App() {
  const [inputValue, setInputValue] = useState(15);
  return (
    <div>
      <CustomInputNumber
        min={5}
        max={13}
        step={3}
        name="CustomInputNumber"
        value={inputValue}
        disabled={false}
        onChange={(e) => {
          console.log(e.target.name);
          console.log(e.target.value);
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          console.log('onBlur');
        }}
      />
    </div>
  );
}

export default App;
