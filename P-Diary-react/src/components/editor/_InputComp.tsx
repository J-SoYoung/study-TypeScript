import React, { FC, ReactElement } from 'react';
import { InputBox } from './styles';
import { formatDate } from '../../utils/formatDate';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  date: Date;
  setDate: (date: Date) => void;
};

export const InputComp: FC<Props> = (
  props,
): ReactElement => {
  const { title, setTitle, date, setDate } = props;

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDate(new Date(e.target.value));
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTitle(e.target.value);
  };

  return (
    <InputBox>
      <input
        className="input_date"
        type="date"
        value={formatDate(date)}
        onChange={handleDateChange}
      />
      <input
        className="input_title"
        type="text"
        value={title}
        placeholder="일기 제목을 입력해주세요"
        onChange={handleTitleChange}
      />
    </InputBox>
  );
};
