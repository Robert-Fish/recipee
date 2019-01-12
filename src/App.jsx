import React from 'react';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import './index.css';

import store from './store';
// import Contact from './Components/Contact';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Recipes />
      </div>
    </Provider>
  );
}
