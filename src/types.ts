export type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type Photos = Photo[];

export type Image = {
  src: string;
  alt: string;
};
