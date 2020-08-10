import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import './styles/style.scss';

const App = () => {
  return (
    <Provider store={store}>
      <section className="main">
        <Routes />
      </section>
    </Provider>
  );
}

export default App;