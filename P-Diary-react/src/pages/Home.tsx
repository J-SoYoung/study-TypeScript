import React, { FC, ReactElement, useState } from 'react';
import { Editor } from '../components/editor/Editor';
import { DiaryType } from '../components/editor/types';
import { DiaryList } from '../components/diaryList/DiaryList';
import styled from 'styled-components';

export const Home: FC = (): ReactElement => {
  const [diaryList, setDiaryList] = useState<DiaryType[]>(
    [],
  );

  return (
    <HomeContainer>
      <Editor
        diaryList={diaryList}
        setDiaryList={setDiaryList}
      />
      <DiaryList diaryList={diaryList} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  max-width: 450px;
  padding: 16px;
  box-sizing: border-box;
`;
