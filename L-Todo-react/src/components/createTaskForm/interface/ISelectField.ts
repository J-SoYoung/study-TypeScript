import React from 'react';
import { IDisabled } from './IDisable';
import { SelectChangeEvent } from '@mui/material';

export interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  value?: string;
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[];
}
