import React, { FC, ReactElement } from 'react';

export const Editor: FC = (): ReactElement => {
  return (
    <div>
      <input />
      <select></select>
      <textarea />
      <button>일기 작성</button>
    </div>
  );
};
