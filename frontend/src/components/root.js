import React from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import App from './app'

import '../stylesheets/reset.css';
import '../stylesheets/splash.css';
import '../stylesheets/sign.css';
import '../stylesheets/navbar.css';




const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
};
export default Root;