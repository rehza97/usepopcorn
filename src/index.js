import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StarRating from './StartRating';


// function Test() {
//   const [movieRate, setmovieRate] = useState();

//   return (
//     <>
//     <StarRating deaultRating={3} m axRating={5} size={24} messages={['Terrible','Bad','Okay','Good','Amazing']} onSetRating={setmovieRate} />
//     <p>{movieRate}</p>
//     </>

//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating deaultRating={3} axRating={5} size={24} messages={['Terrible','Bad','Okay','Good','Amazing']} /> */}
    {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
