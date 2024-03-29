import React from 'react';
import { IDisabled } from './IDisable';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
