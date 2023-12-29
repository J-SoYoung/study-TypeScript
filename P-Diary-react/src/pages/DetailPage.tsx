import React, { FC, ReactElement } from 'react';
import {
  ButtonDiv,
  DetailBox,
  ImageDiv,
  TextDiv,
} from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryType } from '../components/editor/types';

type Props = {
  diaryList: DiaryType[];
};

export const DetailPage: FC<Props> = (
  props,
): ReactElement => {
  const { diaryList } = props;
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryID = Number(id);
  const diary = id ? diaryList[diaryID] : null;

  if (diary === null) {
    return (
      <>
        <h1> 다이어리가 없습니다. </h1>
        <button
          className="go_main_button"
          onClick={() => navigate('/')}
        >
          메인으로
        </button>
      </>
    );
  }
  return (
    <DetailBox>
      <ImageDiv $emotionColor={diary?.emotion.color}>
        <img src={`/assets/${diary.emotion.src}`} />
      </ImageDiv>
      <TextDiv $emotionColor={diary?.emotion.color}>
        <p className="date_p">
          {diary.date.toISOString().split('T')[0]}
        </p>
        <p className="title_p">{diary.title}</p>
        <p className="contents_p">{diary.contents}</p>
      </TextDiv>
      <ButtonDiv $emotionColor={diary?.emotion.color}>
        <button
          className="go_main_button"
          onClick={() => navigate('/')}
        >
          메인으로
        </button>
        <button className="edit_button">수정하기</button>
      </ButtonDiv>
    </DetailBox>
  );
};
