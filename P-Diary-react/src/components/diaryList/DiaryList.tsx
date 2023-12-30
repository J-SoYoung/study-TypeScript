import React, { FC, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryType } from '../editor/types';
import styled from 'styled-components';
import { DiaryStateContext } from '../../App';

export const DiaryList: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { diaryList } = useContext<{
    diaryList: DiaryType[];
    setDiaryList: React.Dispatch<
      React.SetStateAction<DiaryType[]>
    >;
  }>(DiaryStateContext);

  return (
    <>
      {diaryList.map((diary) => {
        return (
          <DiaryBox
            onClick={() => navigate(`/detail/${diary.id}`)}
            key={diary.id}
          >
            <ImageDiv
              className="img_container"
              $emotionColor={diary?.emotion.color}
            >
              <img src={`/assets/${diary.emotion.src}`} />
            </ImageDiv>

            <ContentsDiv className="text_container">
              <p>
                {diary.date.toISOString().split('T')[0]}
              </p>
              <p>{diary.title}</p>
              <p>{diary.contents}</p>
            </ContentsDiv>
          </DiaryBox>
        );
      })}
    </>
  );
};

const DiaryBox = styled.div`
  width: 100%;
  max-height: 120px;
  margin: 16px 0;
  display: flex;
  aling-itmes: center;
  justify-content: flex-start;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid lightgray;
`;
const ImageDiv = styled.div<{ $emotionColor: string }>`
  width: 100px;
  height: 120px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$emotionColor};
  border-radius: 8px;
  img {
    width: 70px;
    height: 70px;
  }
`;
const ContentsDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;
