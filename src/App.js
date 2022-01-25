import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomInputNumber from './components/CustomInputNumber';
import RoomAllocation from './components/RoomAllocation';
import styled from 'styled-components';

const Main = styled.main`
margin:50px;
`;
function App() {
  const [inputValue, setInputValue] = useState(5);

  return (
    <Main>
      <section>
        <h1>CustomInputNumber</h1>
        <CustomInputNumber
          min={3}
          max={23}
          step={2}
          name="CustomInputNumber"
          value={inputValue}
          disabled={false}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            console.log('onBlur');
          }}
        />
      </section>
      <section>
        <h1>RoomAllocation</h1>
        <RoomAllocation
          guest={10}
          room={3}
          onChange={result => console.log(result)}
        />
      </section>
    </Main>
  );
}

export default App;
