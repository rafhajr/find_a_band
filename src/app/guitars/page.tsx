import { CardShow, Header } from '@/components';

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex gap-10 p-20">
        <CardShow />
        <CardShow />
      </div>
    </div>
  );
};

export { Home as default };
