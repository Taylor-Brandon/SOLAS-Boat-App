import React, {useState} from 'react';
import Sign from './components/sign';

 function App() {
  const[loggedIn, setLoggedIn] =useState(false);
  return <Sign loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}

export default App;