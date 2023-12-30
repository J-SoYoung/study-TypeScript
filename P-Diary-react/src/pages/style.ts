import styled from 'styled-components';

// DetailPage
export const DetailBox = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid lightgray;
  .go_main_button {
    height: 30px;
    margin-bottom: 10px;
    border: none;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
  }
  .go_main_button:hover {
    background-color: #eee;
    border-radius: 4px;
  }
`;

export const ImageDiv = styled.div<{
  $emotionColor: string;
}>`
  width: 100%;
  height: 150px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$emotionColor};
  border-radius: 8px;
  img {
    width: 100px;
    height: 100px;
  }
`;
export const TextDiv = styled.div<{
  $emotionColor: string;
}>`
  width: 100%;
  padding: 16px 0;
  box-sizing: border-box;
  p {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .title_p {
    border-bottom: 1px solid
      ${(props) => props.$emotionColor};
  }
  .contents_p {
    height: 200px;
    background-color: #eee;
    border-radius: 0 0 8px 8px;
  }
`;
export const ButtonDiv = styled.div<{
  $emotionColor: string;
}>`
  width: 100%;
  padding: 16px 0;
  padding-bottom: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  aling-items: center;
  button {
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 700;
  }
  .edit_button:hover {
    background-color: ${(props) => props.$emotionColor};
    color: white;
  }
  .delete_button:hover {
    background-color: darkgray;
    color: white;
  }
`;
