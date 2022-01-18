export interface sessionProps {
  session?: {
    banned: boolean;
    email: string;
    image: string;
    name: string;
    role: string[];
  };
}

export interface postsProps {
  content: string;
  created_at: string;
  id: number;
  headline: string;
  published_at: string;
  slug: string;
  updated_at: string;
  date: string;
  youtube: string;
  authors: driversProps[];
  thumbnail: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  gallery: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  }[];
  drivers: driversProps[];
  simulation: simulationsProps;
  competitions: competitionsProps[];
  Zusammenfassung: {
    id: number;
    Fahrer: string;
    Position: string;
    Flagge: {
      id: number;
      url: string;
      width: number;
      height: number;
    }[];
  };
}
[];

export interface driversProps {
  id: number;
  name: string;
  slug: string;
  content: string;
  number: number;
  active: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  color: string;
  position: string;
  image: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  nationality: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  posts: postsProps[];
  achievements: achievementsProps[];
  simulations: simulationsProps[];
  written: postsProps[];
}

export interface achievementsProps {
  id: number;
  date: string;
  intern: boolean;
  competition: string;
  type: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  drivers: driversProps[];
}

export interface simulationsProps {
  id: number;
  title: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  posts: postsProps[];
  drivers: driversProps[];
  competitions: competitionsProps[];
  events: eventsProps[];
  slug: string;
  logo: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface competitionsProps {
  id: number;
  title: string;
  slug: string;
  simulation: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  posts: postsProps[];
  events: eventsProps[];
  thumbnail: {
    id: number;
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface eventsProps {
  id: number;
  date: string;
  track: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  simulation: simulationsProps;
  competition: competitionsProps;
}

export interface streamsProps {
  data: {
    game_name: string;
    thumbnail_url: string;
    title: string;
    viewer_count: number;
    user_name: string;
    user_login: string;
  }[];
}

export interface streamProps {
  game_name: string;
  thumbnail_url: string;
  title: string;
  viewer_count: number;
  user_name: string;
  user_login: string;
}
