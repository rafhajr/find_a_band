'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getInstrumentPageInfo, validInstruments } from '../utils';

import { Header, MusicianPreview, Title } from '@/components';

const InstrumentPage = ({ params }: { params: { instrument: string } }) => {
  const router = useRouter();

  if (!validInstruments.includes(params.instrument.toLowerCase())) {
    router.push('/');
    return null;
  }

  const { image, title, width, musicians } = getInstrumentPageInfo(params.instrument);

  return (
    <div>
      <Header />
      <div className="flex flex-col bg-default-700 items-center h-[500px] gap-4">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full pt-12 px-12">
          <div className="flex flex-col gap-2">
            <Title>{title}</Title>
          </div>
          <div className="flex">
            <Image
              src={image}
              alt="band"
              width={width}
              className="bg-primary-500 rounded-ss-[60px] rounded-ee-[60px]"
            />
          </div>
        </div>
        <div className="grid gap-5 pb-6 grid-cols-2 md:grid-cols-4 py-2">
          {musicians.map((musician) => {
            return <MusicianPreview key={musician.id} musician={musician} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { InstrumentPage as default };
