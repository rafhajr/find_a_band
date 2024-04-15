import { Sessions } from './components/Sessions';

import { Header } from '@/components';

export const Home = () => {
  return (
    <div className="">
      <Header />

      <div className="flex flex-col gap-10 p-5">
        <Sessions />
      </div>
    </div>
  );
};
