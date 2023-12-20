import React, { FC, ReactElement } from 'react';
import './App.css';
import { MainBoard } from './pages/MainBoard';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <MainBoard />
    </div>
  );
};

export default App;
