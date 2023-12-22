import React, {
  FC,
  ReactElement,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { InputContainer } from '../components/inputContainer/InputContainer';
import { ViewContainer } from '../components/viewContainer/ViewContainer';
import { Action, Album } from '../types';
import { MainContaier, Title } from './styles/s_Mainboard';

function reducer(state: Album[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'DELETE': {
      return state.filter(
        (album) => album.id !== action.id,
      );
    }
  }
}

export const MainBoard: FC = (): ReactElement => {
  const [albumList, dispatch] = useReducer(reducer, []);
  // const [albumList, setAlbumList] = useState<Album[]>([]);

  useEffect(() => {
    console.log(albumList);
  }, [albumList]);

  const onClickCreateAlbum = (
    text: string,
    image: string,
    id: number,
  ) => {
    dispatch({
      type: 'CREATE',
      data: {
        text: text,
        image: image,
        id: id,
      },
    });
    // setAlbumList([...albumList, { text, image, id }]);
  };

  const onClickDeleteAlbum = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
    // const deleteAlbum = albumList.filter(
    //   (album) => album.id !== id,
    // );
    // setAlbumList([...deleteAlbum]);
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
