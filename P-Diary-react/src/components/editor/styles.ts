import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const EditorContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: flex-start;
  border: 1px solid lightgray;
  border-radius: 8px;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  .input_date {
    width: 30%;
    margin-right: 16px;
  }
  .input_title {
    width: 70%;
    padding-left: 16px;
    outline: none;
  }
`;
export const EmotionListBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  box-sizing: border-box;
  .emotion_box {
    width: 80px;
    margin: 4px;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #eee;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
      padding: 8px 0;
      text-align: center;
    }
    p {
      padding: 8px 0;
      font-size: 12px;
      text-align: center;
    }
  }
  .emotion_box:hover {
    border: 1px solid lightgray;
  }
`;
export const TextareaBox = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border: 1px solid lightgray;
  outline: none;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  box-sizing: border-box;
  button {
    width: 150px;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  .completed_button {
    background-color: #fff3bf;
  }
`;
