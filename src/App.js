import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import About from './components/About'; // make sure About.js exists
import { useState } from 'react';

function App() {
  const [mystyle, setmystyle] = useState({
    backgroundColor: 'white',
    color: 'black',
  });

  const [btntext, setbtntext] = useState('DarkMode');
  const [navstyle, setnavstyle] = useState({
    backgroundColor: '#ccc',
    color: 'black',
  });

  const toggle_btn = () => {
    if (mystyle.backgroundColor === 'white') {
      setmystyle({ backgroundColor: 'rgb(4, 39, 67)', color: 'white' });
      setnavstyle({ backgroundColor: '#333', color: 'white' });
      setbtntext('LightMode');
    } else {
      setmystyle({ backgroundColor: 'white', color: 'black' });
      setnavstyle({ backgroundColor: '#ccc', color: 'black' });
      setbtntext('DarkMode');
    }
  };

  return (
<Router>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      ...mystyle,
    }}
  >
    <Navbar toggle_btn={toggle_btn} btntext={btntext} mystyle={navstyle} />

    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Form mystyle={mystyle} />} />
        <Route path="/about" element={<About mystyle={mystyle} />} />
      </Routes>
    </div>

    <Footer mystyle={mystyle} />
  </div>
</Router>

  );
}

export default App;
