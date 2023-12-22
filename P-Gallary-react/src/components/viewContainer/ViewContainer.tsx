import React, { FC, ReactElement } from 'react';
import { Album } from '../types/typeAlbum';
import { ViewBox } from './styles/s_ViewCotainer';

type Props = {
  albumList: Album[];
  onClickDeleteAlbum: (id: number) => void;
};

export const ViewContainer: FC<Props> = (
  props,
): ReactElement => {
  const { albumList, onClickDeleteAlbum } = props;

  const onClickDelete = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      onClickDeleteAlbum(id);
    }
  };

  return (
    <ViewBox>
      {albumList.map((album, idx) => {
        return (
          <div key={idx} className="albumBox">
            <img
              src={album.image}
              width={'170px'}
              height={'180px'}
            />
            <div>
              <p>{album.text}</p>
              <button
                onClick={() => onClickDelete(album.id)}
              >
                {' '}
                지우기{' '}
              </button>
            </div>
          </div>
        );
      })}
    </ViewBox>
  );
};
