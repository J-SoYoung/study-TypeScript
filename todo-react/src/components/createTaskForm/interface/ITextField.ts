import React from 'react';

export interface IDisabled {
  disabled?: boolean;
}

export interface ITextField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}
