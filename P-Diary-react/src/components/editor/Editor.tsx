import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';

export const Editor: FC = (): ReactElement => {
  const [diaryTitle, setDiaryTitle] = useState<string>('');
  const [diaryTextarea, setDiaryTextarea] =
    useState<string>('');

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDiaryTitle(e.target.value);
  };
  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDiaryTextarea(e.target.value);
  };

  const emotionList = [
    {
      src: 'emotion1.png',
      description: '아주 좋음',
    },
    {
      src: 'emotion2.png',
      description: '좋음',
    },
    {
      src: 'emotion3.png',
      description: '보통',
    },
    {
      src: 'emotion4.png',
      description: '나쁨',
    },
    {
      src: 'emotion5.png',
      description: '아주 나쁨',
    },
  ];

  return (
    <DiaryContainer>
      <Title>Write a Diary</Title>
      <InputBox>
        <input className="input_date" type="date" />
        <input
          className="input_title"
          type="text"
          value={diaryTitle}
          placeholder="일기 제목을 입력해주세요"
          onChange={handleTitleChange}
        />
      </InputBox>
      <EmotionListBox>
        {emotionList.map((emotion, idx) => {
          return (
            <div className="emotion_box" key={idx}>
              <img
                className="emotion"
                src={`/assets/${emotion.src}`}
              />
              <p>{emotion.description}</p>
            </div>
          );
        })}
      </EmotionListBox>
      <TextareaBox
        value={diaryTextarea}
        placeholder="일기 내용을 입력해주세요"
        onChange={handleTextareaChange}
      />
      <ButtonBox>
        <button className="cancel_button">작성 취소</button>
        <button className="completed_button">
          일기 작성
        </button>
      </ButtonBox>
    </DiaryContainer>
  );
};

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;
`;
const DiaryContainer = styled.div`
  border: 1px solid lightgray;
  max-width: 450px;
  margin: 16px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: flex-start;
  border-radius: 8px;
`;
const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  .input_date {
    width: 30%;
    margin-right: 16px;
  }
  .input_title {
    width: 70%;
    padding-left: 16px;
    outline: none;
  }
`;
const EmotionListBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  box-sizing: border-box;
  .emotion_box {
    width: 80px;
    margin: 4px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #eee;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
      padding: 8px 0;
      text-align: center;
    }
    p {
      padding: 8px 0;
      font-size: 12px;
      text-align: center;
    }
  }
  .emotion_box:hover {
    border: 1px solid lightgray;
  }
`;
const TextareaBox = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border: 1px solid lightgray;
  outline: none;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  box-sizing: border-box;
  button {
    width: 150px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  .completed_button {
    background-color: #fff3bf;
  }
`;
