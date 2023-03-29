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

export type Videos = {
  id: string;
  identifier: string;
  thumbnailUrl?: string | null;
  longDescription: string;
  shortDescription: string;
  meta?: {
    __typename?: "VideoMeta";
    minutes?: number | null;
  } | null;
  taxonomies: {
    __typename?: "Taxonomy";
    genre?: {
      __typename?: "Term";
      name?: string | null;
      slug?: string | null;
    } | null;
    instructors?: Array<{
      __typename?: "Instructor";
      name?: string | null;
    } | null> | null;
    flavor?: {
      __typename?: "Term";
      name?: string | null;
    } | null;
  };
  primaryStyle?: {
    __typename?: "Term";
    genres?: Array<string | null> | null;
    name?: string | null;
    types?: Array<string | null> | null;
    slug?: string | null;
  } | null;
  content?: {
    __typename?: "VideoContent";
    title?: string | null;
    shortDescription?: string | null;
  } | null;
};

export type VideosOldTypes = {
  id: string | undefined;
  identifier: string | undefined;
  thumbnailUrl?: string | undefined;
  shortDescription?: string | undefined;
  meta: Meta | undefined;
  taxonomies: Taxonomies | undefined;
  primaryStyle?: PrimaryStyle | undefined;
  content: Content | undefined;
};

export type Video = {
  shortDescription: string;
  id: string;
  identifier: string;
  thumbnailUrl: string;
  hls: string;
  title: string;
  longDescription: string;
  minutes: number;
  primaryStyle: {
    name: string;
  };
  taxonomies: {
    instructors: [{ name: string }];
    needs: [{ name: string }];
  };
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

export type RelatedVideos = {
  identifier: string;
  shortDescription: string;
  minutes: number;
  title: string;
  thumbnailUrl: string;
};
