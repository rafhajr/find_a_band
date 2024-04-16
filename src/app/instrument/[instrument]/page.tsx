'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getInstrumentPageInfo, validInstruments } from '../utils';

import { Header, MusicianPreview, Title } from '@/components';

const InstrumentPage = ({ params }: { params: { instrument: string } }) => {
  const router = useRouter();

  if (!validInstruments.includes(params.instrument.toLowerCase())) {
    return router.push('/');
  }

  const { image, title, width } = getInstrumentPageInfo('');

  return (
    <div>
      <Header />
      <div className="flex flex-col bg-default-700 items-center h-[500px] gap-8 px-12 py-12">
        <div className="flex items-center justify-evenly w-full">
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
        <div className="flex gap-5 mt-5">
          <MusicianPreview />
          <MusicianPreview />
          <MusicianPreview />
          <MusicianPreview />
        </div>
      </div>
    </div>
  );
};

export { InstrumentPage as default };
