import React from 'react'; //this imports the react library
import ReactDOM from 'react-dom'; //this imports the ability to manipulate the dom 
import App from './app'; //this imports the app component 
import 'bootstrap/dist/css/bootstrap.min.css'; //this imports the bootstrap library 

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
