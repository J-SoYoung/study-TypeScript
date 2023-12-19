import { disableType } from './BasicFormType';

export type DateType = disableType & {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
};
