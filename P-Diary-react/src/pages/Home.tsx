import React, { FC, ReactElement } from 'react';
import { Editor } from '../components/editor/Editor';
import { DiaryList } from '../components/diaryList/DiaryList';

export const Home: FC = (): ReactElement => {
  return (
    <div>
      <Editor />
      <DiaryList />
    </div>
  );
};
