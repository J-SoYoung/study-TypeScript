import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Album } from '../inputContainer/types/typeAlbum';

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

const ViewBox = styled.div`
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .albumBox {
    width: 180px;
    margin: 16px 6px;
    text-align: center;
    p {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
    img {
      object-fit: cover;
    }
  }
`;
