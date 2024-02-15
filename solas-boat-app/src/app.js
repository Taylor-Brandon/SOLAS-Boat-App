import React, { useState } from 'react';
import Sign from './components/sign';
import Home from './components/home';
import Log from './components/log';
import Results from './components/results';
import Profile from './components/profile';
import PDFViewer from './components/pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ userNameInput, setUserNameInput] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Sign setLoggedIn={setLoggedIn} setFirstName={setFirstName} setLastName={setLastName} setIsAdmin={setIsAdmin} setUserNameInput={setUserNameInput} />} />
        <Route path="/signup" element={<Sign setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Log setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home firstName={firstName} lastName={lastName} />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile firstName={firstName} lastName={lastName} isAdmin={isAdmin} userNameInput={userNameInput} />} />
        <Route path="/pdf" element={<PDFViewer />} />
      </Routes>
    </Router>
  );
}

export default App;

