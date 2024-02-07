import React, { useState } from 'react';
import Sign from './components/sign';
import Home from './components/home';
import Log from './components/log';
import Results from './components/results';
import Profile from './components/profile';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Sign setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Log setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;


