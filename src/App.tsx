import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './screens/Home/page';
import BaseLayout from './components/layout/Baselayout';
import { Provider } from 'react-redux';
import store from './store';

function AppUI() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppUI />
    </Provider>

  );
}

export default App;
