import React, { FC, ReactElement } from 'react';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { NewPage } from './pages/NewPage';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
