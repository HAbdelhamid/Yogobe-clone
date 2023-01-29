export type Meta = {
  minutes: number;
};

export type Genre = {
  genres: string[];
  name: string;
  slug: string;
};

export type Instructor = {
  slug: string;
  name: string;
};

export type Flavor = {
  name: string;
};

export type Taxonomies = {
  genre: Genre;
  instructors: Instructor[];
  flavor?: Flavor;
};

export type PrimaryStyle = {
  genres: string[];
  name: string;
};
export type Content = {
  title: string;
  shortDescription: string;
};

export type Video = {
  id: string;
  thumbnailUrl: string;
  meta: Meta;
  taxonomies: Taxonomies;
  primaryStyle: PrimaryStyle;
  content: Content;
};
