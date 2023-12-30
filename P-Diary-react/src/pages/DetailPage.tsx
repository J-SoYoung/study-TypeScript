import React, { FC, ReactElement, useContext } from 'react';
import {
  ButtonDiv,
  DetailBox,
  ImageDiv,
  TextDiv,
} from './style';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryType } from '../components/editor/types';
import { DiaryStateContext } from '../App';

export const DetailPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { diaryList } = useContext<{
    diaryList: DiaryType[];
    setDiaryList: React.Dispatch<
      React.SetStateAction<DiaryType[]>
    >;
  }>(DiaryStateContext);

  const { id } = useParams();
  const diaryID = Number(id);
  const diary = id ? diaryList[diaryID] : null;

  const deleteDiaryButton = (id: number) => {
    const ddd = diaryList.filter(
      (diary) => diary.id !== id,
    );
    // navigate('/');
    console.log(ddd);
  };

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
      <button
        className="go_main_button"
        onClick={() => navigate('/')}
      >
        &#60;HOME
      </button>
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
        <button className="edit_button">수정하기</button>
        <button
          className="delete_button"
          onClick={() => deleteDiaryButton(diary.id)}
        >
          삭제
        </button>
      </ButtonDiv>
    </DetailBox>
  );
};
