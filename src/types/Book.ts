interface Book {
  _id: string;
  title: string;
  author: string;
  uploadedBy: {
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
