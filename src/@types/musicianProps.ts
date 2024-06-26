export type MusicianProps = {
  id: string;
  name: string;
  photo: string;
  description: string;
  email: string;
  phone: string;
  genres: { genre: string }[];
};

export type MusiciansByInstrumentContract = {
  instrument: string;
  musicians: MusicianProps[];
};
