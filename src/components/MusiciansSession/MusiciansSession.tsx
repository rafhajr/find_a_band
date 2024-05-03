'use client';

import { useRouter } from 'next/navigation';

import { MusiciansByInstrumentContract } from '@/@types/musicianProps';
import { Button, Metric, MusicianPreview } from '@/components';

export const MusiciansSession = ({ instrument, musicians }: MusiciansByInstrumentContract) => {
  const router = useRouter();

  const selectedMusician = musicians.slice(0, 4);

  return (
    <div className="flex flex-col lg:w-[1000px] mt-2 gap-4 rounded-2xl">
      <div className="flex items-center justify-between pb-2 border-b-2 ">
        <Metric>{instrument}</Metric>
        <Button size="lg" variant="light" onClick={() => router.push(`/instrument/${instrument.toLowerCase()}`)}>
          See all
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 px-4">
        {selectedMusician.map((musician) => (
          <MusicianPreview musician={musician} key={musician.id} />
        ))}
      </div>
    </div>
  );
};
