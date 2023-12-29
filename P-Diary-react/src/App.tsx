import React, { FC, ReactElement, useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import { DiaryType } from './components/editor/types';

export const DiaryStateContext = React.createContext<{
  diaryList: DiaryType[];
  setDiaryList: React.Dispatch<
    React.SetStateAction<DiaryType[]>
  >;
}>({
  diaryList: [],
  setDiaryList: () => {},
});

const App: FC = (): ReactElement => {
  const [diaryList, setDiaryList] = useState<DiaryType[]>(
    [],
  );

  return (
    <DiaryStateContext.Provider
      value={{ diaryList, setDiaryList }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/detail/:id"
              element={<DetailPage diaryList={diaryList} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </DiaryStateContext.Provider>
  );
};

export default App;
