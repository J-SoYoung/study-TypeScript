export type Album = {
  image?: string;
  text?: string;
  id: number;
};

export type ActionCreate = {
  type: 'CREATE';
  data: {
    text: string;
    image: string;
    id: number;
  };
};

export type ActionDelete = {
  type: 'DELETE';
  id: number;
};

export type Action = ActionCreate | ActionDelete;
