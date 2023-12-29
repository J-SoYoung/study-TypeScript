import React, { FC, ReactElement } from 'react';
import { EmotionListBox } from './styles';
import { ClickedPropsType, EmotionType } from './types';
import { emotionList } from './emotionList';

type Props = {
  emotion: EmotionType;
  setEmotion: (emotion: EmotionType) => void;
  isClicked: ClickedPropsType;
  setIsClicked: (isClicked: ClickedPropsType) => void;
};

export const EmotionComp: FC<Props> = (
  props,
): ReactElement => {
  const { setEmotion, isClicked, setIsClicked } = props;
  const handleEmotionClick = (emotion: EmotionType) => {
    setEmotion({
      id: emotion.id,
      src: emotion.src,
      description: emotion.description,
      color: emotion.color,
    });

    setIsClicked({
      id: emotion.id,
      clicked: true,
    });
  };

  return (
    <EmotionListBox>
      {emotionList.map((emotion) => {
        return (
          <div
            key={emotion.id}
            className={'emotion_box'}
            style={{
              backgroundColor:
                isClicked.id === emotion.id
                  ? emotion.color
                  : ' ',
            }}
            onClick={() => {
              handleEmotionClick(emotion);
            }}
          >
            <img
              className="emotion"
              src={`/assets/${emotion.src}`}
            />
            <p>{emotion.description}</p>
          </div>
        );
      })}
    </EmotionListBox>
  );
};
