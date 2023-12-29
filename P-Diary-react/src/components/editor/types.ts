export type EmotionType = {
  id: number;
  src: string;
  description: string;
  color: string;
};
export type ClickedPropsType = {
  id: number;
  clicked: boolean;
};
export type DiaryType = {
  id: number;
  title: string;
  contents: string;
  emotion: EmotionType;
  date: Date;
};
