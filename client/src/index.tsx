import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'inversify-react';
import App from './App';
import ioc from './inversify.config';

ReactDOM.render(
  <Provider container={ioc.container}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);
