import React, { useState } from 'react';
import Sign from './components/sign';
import Home from './components/home';
import Log from './components/log';
import Results from './components/results';
import Profile from './components/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Sign setLoggedIn={setLoggedIn} setFirstName={setFirstName} setLastName={setLastName} />} />
        <Route path="/signup" element={<Sign setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Log setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home firstName={firstName} lastName={lastName} />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile firstName={firstName} lastName={lastName} />} />
      </Routes>
    </Router>
  );
}

export default App;

