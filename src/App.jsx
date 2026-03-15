import { useState } from 'react';
import './App.css';
import Contacts from './Contacts';
import DriverList from './DriversList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Forms</h1>
      <Contacts />
      {/* <DriverList /> */}
    </>
  );
}

export default App;
