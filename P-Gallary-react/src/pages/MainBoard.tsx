import React, { FC, ReactElement } from 'react';

import { InputContainer } from '../components/inputContainer/InputContainer';
import { ViewContainer } from '../components/viewContainer/ViewContainer';
import styled from 'styled-components';

export const MainBoard: FC = (): ReactElement => {
  return (
    <MainContaier>
        <Title>Gallary</Title>
        <InputContainer />
        <ViewContainer />
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
