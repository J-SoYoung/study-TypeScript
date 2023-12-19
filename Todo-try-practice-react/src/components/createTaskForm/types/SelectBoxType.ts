import { SelectChangeEvent } from '@mui/material';

export type SelectItem = {
  label: string;
  value: string;
};

export type SelectBoxType = {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: SelectItem[];
};
