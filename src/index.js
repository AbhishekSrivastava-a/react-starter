//import React and React dom libraries
import React from 'react'; // library that defines what a component is and how multiple of it work together
import ReactDOM from 'react-dom/client'; // library that know how to get a component to show up in the browser 
import App from './App';
// Get a reference with div id with ID root
const element = document.getElementById('root');
// Tell react to take control of the application
const root = ReactDOM.createRoot(element);
// create a component


root.render(
  <>
    <App />
  </>
);