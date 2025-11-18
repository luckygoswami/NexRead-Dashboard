interface Book {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
  };
  description: string;
  genre: string;
  coverImage: string;
  file: string;
  createdAt: string;
  updatedAt: string;
}
