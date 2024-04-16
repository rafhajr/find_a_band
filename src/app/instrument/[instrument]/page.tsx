import { CardTitle, Header, MusicianPreview } from '@/components';

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-4 px-20 py-10 w-full rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b-1 border-default-600">
          <CardTitle className="text-default-600">Instrument</CardTitle>
        </div>
        <div className="flex gap-5 pt-10">
          <MusicianPreview />
          <MusicianPreview />
          <MusicianPreview />
          <MusicianPreview />
        </div>
      </div>
    </div>
  );
};

export { Home as default };
