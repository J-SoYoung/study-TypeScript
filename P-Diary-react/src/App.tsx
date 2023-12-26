import React, { FC, ReactElement } from 'react';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
