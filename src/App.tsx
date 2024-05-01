import { useState } from 'react';
import './App.css';
import Feeds from './components/Feeds'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import Header from './components/Header'

function App() {
  return (
    <>
    <Sidebar><Calendar></Calendar></Sidebar>
      
    </>
  );
}

export default App;
