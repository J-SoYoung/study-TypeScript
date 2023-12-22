import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  setText: (text: string) => void;
};

export const AlbumTextComp: FC<Props> = (
  props,
): ReactElement => {
  
  const { text, setText } = props;
  const onChangeTextAdd = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  return (
    <InputTitle
      className="input_title"
      type="text"
      value={text}
      placeholder="사진 설명"
      onChange={onChangeTextAdd}
    />
  );
};

const InputTitle = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  border-bottom: 1px solid teal;
  outline: none;
`;
