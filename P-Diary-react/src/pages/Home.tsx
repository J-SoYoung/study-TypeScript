import React, { FC, ReactElement } from 'react';
import { DiaryList } from '../components/diaryList/DiaryList';
import { Editor } from '../components/editor/Editor';

export const Home: FC = (): ReactElement => {
  return (
    <>
      <Editor />
      <DiaryList />
    </>
  );
};
