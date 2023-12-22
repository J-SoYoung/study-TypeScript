import styled from 'styled-components';

export const ViewBox = styled.div`
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
