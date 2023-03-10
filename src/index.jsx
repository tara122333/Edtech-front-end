import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";


import 'react-toastify/dist/ReactToastify.css';


import './index.css';
import App from './App';
import Store from './Redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
          <App />
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);

