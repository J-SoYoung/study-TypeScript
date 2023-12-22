import React, { FC, ReactElement, useState } from 'react';
import { InputContainer } from '../components/inputContainer/InputContainer';
import { ViewContainer } from '../components/viewContainer/ViewContainer';
import { Album } from '../components/inputContainer/types/typeAlbum';
import styled from 'styled-components';

export const MainBoard: FC = (): ReactElement => {
  // album-list
  const [albumList, setAlbumList] = useState<Album[]>([]);

  const onClickCreateAlbum = (
    text: string,
    image: string,
  ) => {
    setAlbumList([...albumList, { text, image }]);
  };

  return (
    <MainContaier>
      <Title>Gallary</Title>
      <InputContainer
        onClickCreateAlbum={onClickCreateAlbum}
      />
      <ViewContainer albumList={albumList} />
    </MainContaier>
  );
};

const MainContaier = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: white;
  background-color: teal;
  padding: 16px;
  box-sizing: border-box;
`;
