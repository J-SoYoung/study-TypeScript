import React, { FC, ReactElement } from 'react';
import { DiaryType } from '../editor/types';
import styled from 'styled-components';

type Props = {
  diaryList: DiaryType[];
};
export const DiaryList: FC<Props> = (
  props,
): ReactElement => {
  const { diaryList = [] } = props;

  return (
    <>
      {diaryList.map((diary) => {
        console.log(diary);
        return (
          <DiaryBox
            key={diary.id}
            $emotionColor={diary?.emotion.color}
          >
            <div className="img_container">
              <img src={`/assets/${diary.emotion.src}`} />
            </div>
            <div className="text_container">
              <p>
                {diary.date.toISOString().split('T')[0]}
              </p>
              <p>{diary.title}</p>
              <p>{diary.contents}</p>
            </div>
          </DiaryBox>
        );
      })}
    </>
  );
};

const DiaryBox = styled.div<{ $emotionColor: string }>`
  border: 1px solid lightgray;
  margin: 16px 0;
  display: flex;
  justify-content: flex-start;
  border-radius: 8px;

  .img_container {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$emotionColor};
    border-radius: 8px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  .text_container {
    padding: 16px;
    box-sizing: border-box;
  }
`;
