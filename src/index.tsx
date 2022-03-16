import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { TodoContextProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoContextProvider>
    <App />
    </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


