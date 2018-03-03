import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './modules/App';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <
  Router >
  <
  div >
  <
  Switch >
  <
  Route path = "/user"
  component = { App }
  />

  <
  Route component = { App }
  />

  <
  /Switch> <
  /div> <
  /Router>,


  document.getElementById('root')
);
//registerServiceWorker();
