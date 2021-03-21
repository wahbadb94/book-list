export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
  searchInfo?: SearchInfo;
};

type VolumeInfo = {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  description?: string;
  pageCount: number;
  imageLinks: ImageLinks;
  previewLink: string;
  infoLink: string;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type SearchInfo = {
  textSnippet: string;
};
