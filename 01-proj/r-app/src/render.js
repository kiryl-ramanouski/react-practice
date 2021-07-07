import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {functionality} from "./redax/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} functionality={functionality}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
