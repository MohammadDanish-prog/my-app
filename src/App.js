import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState, useEffect } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#181a1b';
      document.body.style.color = '#f8f9fa';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
  
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
          <Form heading="Enter the Text here!!!" mode={mode} />  
      </div>
    
    </>
  );
}

export default App;