import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

import GlobalStyle from './style/GlobalStyle';

ReactDOM.render(
  <Provider store={store()}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('app')
);
