import { Box, Typography, TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interface/ITextField';
import PropTypes from 'prop-types';

export const TaskDeascriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="description"
      variant="outlined"
      size="small"
      rows={4}
      fullWidth
      multiline
      onChange={onChange}
      disabled={disabled}
    />
  );
};
TaskDeascriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
