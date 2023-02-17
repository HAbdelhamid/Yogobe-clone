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
  slug: string;
  genres: string[];
  name: string;
};
export type Content = {
  title: string;
  shortDescription: string;
};

export type Video = {
  id: string;
  identifier: string;
  thumbnailUrl: string;
  meta: Meta;
  taxonomies: Taxonomies;
  primaryStyle: PrimaryStyle;
  content: Content;
};

export type Login = {
  user: {
    email: string;
    id: string;
    profile: {
      displayName: string;
    };
  };
};

export type Favorites = {
  videos: [];
};

export type currentUser = {
  currentUser: {
    accessToken: string;
    accessUntil: string;
    id: string;
    email: string;
    firstName: string;
    favorites: Favorites;
  };
};

export type FavoritedData = {
  favorited: boolean;
  id: string;
};

export type GetFavoriteVideos = {
  getFavoriteVideos: {
    data: FavoritedData;
  };
};
