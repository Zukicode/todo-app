import React from 'react';
import ReactDOM from 'react-dom/client';

//Global Style
import './styles/global.scss';

//Components
import { App } from './components/App/App';

//Redux
import { Provider } from 'react-redux';
import { store } from 'features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
