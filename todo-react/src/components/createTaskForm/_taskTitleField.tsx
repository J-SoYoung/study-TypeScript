import React, { FC, ReactElement } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { ITextField } from './interface/ITextField';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextField> = (
  props,
): ReactElement => {
  // 구조분해할당, 기본값 설정
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
