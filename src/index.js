import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoStore from './stores/TodoStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider todoStore={TodoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
