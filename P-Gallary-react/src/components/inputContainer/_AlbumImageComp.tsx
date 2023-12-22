import React, {
  FC,
  ReactElement,
  useRef,
} from 'react';
import styled from 'styled-components';

type Props = {
  setImage: (file: string) => void;
  image: string;
};

export const AlbumImageComp: FC<Props> = (
  props,
): ReactElement => {
  const { setImage, image } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangePreviewImage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
      } else {
        throw new RangeError('사진 파일이 없습니다.');
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <ImgBox
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        {image ? (
          <Preview src={image} />
        ) : (
          <>
            <img
              src="/icon/addIcon.png"
              width={'70px'}
              height={'70px'}
            />
            <p>이미지를 추가해주세요</p>
          </>
        )}
      </ImgBox>
      <input
        className="input_file"
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onChangePreviewImage}
      />
    </>
  );
};

const ImgBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
const Preview = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
`;
