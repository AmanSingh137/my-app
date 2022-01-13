import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className='bgImage'><h1 className='heading'>CRYPTO CURRENCY CONVERTER</h1></div>
    <App />
    <div className='footer'>
    <p className='about'>
      <a href=''>@Sakshi_Bharti</a>
      &nbsp; &nbsp;
      <a href=''>@Aman_Kumar_Singh</a>
    </p></div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
