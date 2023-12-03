import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/Baselayout';
import { Provider } from 'react-redux';
import store from './store';

import HomePage from './screens/Home/page';
// Admin
import AdminPage from './screens/Admin/page/index';
import LoginPage from './screens/Admin/page/Auth';

function AppUI() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='/HyNam/Login' element={<LoginPage />} />
        <Route path='/HyNam/Home' element={<AdminPage />} />
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
