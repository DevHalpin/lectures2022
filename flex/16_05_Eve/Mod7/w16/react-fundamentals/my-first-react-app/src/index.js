import React from 'react';
import ReactDOM from 'react-dom/client';
// import Hello from './components/Hello';
// import SayHello from './components/SayHello';
// import Mood from './components/Mood';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello/>
    <SayHello/>
    <Mood name="David" mood="crazy" />
    <SayHello name="Marilynn"/>
    <SayHello name="David"/> */}
    <Counter/>
    <ToDoList/>
    {/* <Mood name="Chris" />
    <Mood name="Victor" mood="sad" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
