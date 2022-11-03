export type BookMark = {
  id: number;
  title: string;
  url: string;
  favIconUrl: string;
};

export type BookMarkGroup = {
  id: number;
  name: string;
  icon: string;
  description: string;
  bookmarks: BookMark[];
};
