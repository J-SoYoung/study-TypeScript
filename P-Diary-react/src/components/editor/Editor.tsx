import React, {
  FC,
  ReactElement,
  useRef,
  useState,
} from 'react';
import { ButtonBox, DiaryContainer, Title } from './styles';
import {
  ClickedPropsType,
  DiaryType,
  EmotionType,
} from './types';
import { InputComp } from './_InputComp';
import { TextareaComp } from './_TextareaComp';
import { EmotionComp } from './_EmotionComp';

type Props = {
  diaryList: DiaryType[];
  setDiaryList: React.Dispatch<
    React.SetStateAction<DiaryType[]>
  >;
};

export const Editor: FC<Props> = (props): ReactElement => {
  const { setDiaryList } = props;
  const diaryId = useRef(0);

  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [contents, setContents] = useState<string>('');
  const [emotion, setEmotion] = useState<EmotionType>({
    id: 3,
    src: 'emotion3.png',
    description: '보통',
    color: '#fdce17',
  });
  const [isClicked, setIsClicked] =
    useState<ClickedPropsType>({
      id: 3,
      clicked: false,
    });

  const createDiaryButton = () => {
    if (title === '' || contents === '') {
      return alert('빈칸을 채워주세요');
    }
    const diary: DiaryType = {
      id: diaryId.current,
      title: title,
      contents: contents,
      emotion: emotion,
      date: date,
    };

    diaryId.current += 1;
    setDiaryList((prev) => [...prev, diary]);
    setTitle('');
    setDate(new Date());
    setContents('');
    setEmotion({
      id: 3,
      src: 'emotion3.png',
      description: '보통',
      color: '#fdce17',
    });
  };

  return (
    <DiaryContainer>
      <Title>Write a Diary</Title>
      <InputComp
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
      />
      <EmotionComp
        emotion={emotion}
        setEmotion={setEmotion}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      <TextareaComp
        contents={contents}
        setContents={setContents}
      />
      <ButtonBox>
        <button className="cancel_button">작성 취소</button>
        <button
          className="completed_button"
          onClick={createDiaryButton}
        >
          일기 작성
        </button>
      </ButtonBox>
    </DiaryContainer>
  );
};
