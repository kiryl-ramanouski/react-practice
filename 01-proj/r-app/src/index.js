import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
    {id: 1, name: "Name1"},
    {id: 2, name: "Name2"},
    {id: 3, name: "Name3"},
];
const messagesData = [
    {message: "Hello"},
    {message: "Hi"},
    {message: "How are you?"},
];
const postsData = [
    {message: "Hello, how are you?", likes: 10},
    {message: "It's my second post", likes: 20},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
