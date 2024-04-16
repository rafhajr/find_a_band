import { Sessions } from './components/Sessions';

import { Header } from '@/components';

export const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-8 px-12 py-6">
        <Sessions />
        <Sessions />
        <Sessions />
      </div>
    </div>
  );
};
