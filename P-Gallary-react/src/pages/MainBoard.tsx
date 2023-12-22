import React, {
  FC,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { InputContainer } from '../components/inputContainer/InputContainer';
import { ViewContainer } from '../components/viewContainer/ViewContainer';
import { Album } from '../components/types/typeAlbum';
import { MainContaier, Title } from './styles/mainboard';

export const MainBoard: FC = (): ReactElement => {
  // album-list
  const [albumList, setAlbumList] = useState<Album[]>([]);

  useEffect(() => {
    console.log(albumList);
  }, [albumList]);

  const onClickCreateAlbum = (
    text: string,
    image: string,
    id: number,
  ) => {
    setAlbumList([...albumList, { text, image, id }]);
  };

  const onClickDeleteAlbum = (id: number) => {
    const deleteAlbum = albumList.filter(
      (album) => album.id !== id,
    );
    setAlbumList([...deleteAlbum]);
  };

  return (
    <MainContaier>
      <Title>Gallary</Title>
      <InputContainer
        onClickCreateAlbum={onClickCreateAlbum}
      />
      <ViewContainer
        albumList={albumList}
        onClickDeleteAlbum={onClickDeleteAlbum}
      />
    </MainContaier>
  );
};
