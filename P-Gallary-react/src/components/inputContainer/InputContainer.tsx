import React, {
  FC,
  ReactElement,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { AlbumImageComp } from './_AlbumImageComp';
import { AlbumTextComp } from './_AlbumTextComp';

type Props = {
  onClickCreateAlbum: (
    text: string,
    image: string,
    id: number,
  ) => void;
};

export const InputContainer: FC<Props> = (
  props,
): ReactElement => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const idRef = useRef(0);

  const onClickCreate = () => {
    if (text === '' || image === '') {
      return alert('사진 설명 또는 이미지가 빈칸입니다');
    }
    const id = idRef.current++;
    props.onClickCreateAlbum(text, image, id);
    setText('');
    setImage('');
  };

  return (
    <InputContainerBox>
      <AlbumTextComp setText={setText} text={text} />
      <AlbumImageComp setImage={setImage} image={image} />
      <button onClick={onClickCreate}>앨범에 저장</button>
    </InputContainerBox>
  );
};

const InputContainerBox = styled.div`
  border: 1px solid teal;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;
