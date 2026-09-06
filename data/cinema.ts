export interface FilmItem {
  title: string;
  year: number;
  director: string;
  tagline: string;
  rating: string;
  aspectRatio: string;
}

export interface CinemaData {
  statement: string;
  substatement: string;
  letterboxdUrl: string;
  youtubeUrl: string;
  handle: string;
  filmsWatched: number;
  favoriteFilms: FilmItem[];
}

export const cinemaData: CinemaData = {
  statement: "I write backend systems. I watch films.",
  substatement:
    "\"Cinema touch our hearts, awaken our vision, and change the way we see things.\"",
  letterboxdUrl: "https://letterboxd.com/hassan57/",
  youtubeUrl: "https://www.youtube.com/@8a3ha",
  handle: "@hassan57",
  filmsWatched: 876,
  favoriteFilms: [
    {
      title: "THE TRUMAN SHOW",
      year: 1998,
      director: "Peter Weir",
      tagline: "In case I don't see ya, good afternoon, good evening, and good night!",
      rating: "5.0 / 5.0",
      aspectRatio: "1.85:1",
    },
    {
      title: "CINEMA PARADISO",
      year: 1988,
      director: "Giuseppe Tornatore",
      tagline: "A celebration of love, memory, and the magic of motion pictures.",
      rating: "5.0 / 5.0",
      aspectRatio: "1.66:1",
    },
    {
      title: "ETERNITY AND A DAY",
      year: 1998,
      director: "Theo Angelopoulos",
      tagline: "How long is tomorrow? Eternity and a day.",
      rating: "5.0 / 5.0",
      aspectRatio: "1.66:1",
    },
    {
      title: "MULHOLLAND DRIVE",
      year: 2001,
      director: "David Lynch",
      tagline: "A love story in the city of dreams.",
      rating: "5.0 / 5.0",
      aspectRatio: "1.85:1",
    },
  ],
};
