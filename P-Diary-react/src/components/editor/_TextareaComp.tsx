import React, { FC, ReactElement } from 'react';
import { TextareaBox } from './styles';

type Props = {
  contents: string;
  setContents: (contents: string) => void;
};
export const TextareaComp: FC<Props> = (
  props,
): ReactElement => {
  const { contents, setContents } = props;

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContents(e.target.value);
  };

  return (
    <TextareaBox
      value={contents}
      placeholder="일기 내용을 입력해주세요"
      onChange={handleTextareaChange}
    />
  );
};
