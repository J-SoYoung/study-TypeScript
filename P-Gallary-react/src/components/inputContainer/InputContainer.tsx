import React, {
  FC,
  ReactElement,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

type ImageList = {
  image?: string;
  text?: string;
}[];

export const InputContainer: FC = (): ReactElement => {
  // image-view
  const [preview, setPreview] = useState<string>('');

  // image-list
  const imageViewList: ImageList = [];
  const [imageList, setImageList] =
    useState<ImageList>(imageViewList);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeCreateImage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    try {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
      } else {
        throw new RangeError('사진 파일이 없습니다.');
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <TitleBox>
        <input type="text" placeholder="사진 설명" />
      </TitleBox>
      <ImgBox
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        {preview ? (
          <Preview src={preview} />
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
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={onChangeCreateImage}
      />

      <InnerBox>
        <button>사진 추가</button>
      </InnerBox>
    </Box>
  );
};

const Box = styled.div`
  border: 1px solid teal;
  text-align: center;
`;
const InnerBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;
const TitleBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
  input {
    width: 250px;
    height: 40px;
    border: none;
    border-bottom: 1px solid teal;
    outline: none;
  }
`;
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
