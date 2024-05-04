
import './App.css';
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import { useState } from 'react';
  

function App() {
  const [selectedState, setSelectedState] = useState<string>('');

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
  };
  return (
    <>
      <Sidebar onStateSelect={handleStateSelect}>
      <Calendar selectedState={selectedState} />
      </Sidebar>
    </>
  );
}

export default App;