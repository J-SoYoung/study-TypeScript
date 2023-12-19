export type disableType = {
  disabled?: boolean;
}

export type BasicType = disableType & {
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}
