'use client';

import { useRouter } from 'next/navigation';

import { MusicianProps } from '@/@types/musicianProps';
import { Button, Metric, MusicianPreview } from '@/components';

type SessionProps = {
  instrument: string;
  musicians: MusicianProps[];
};

export const Session = ({ instrument, musicians }: SessionProps) => {
  const router = useRouter();

  const selectedMusician = musicians.slice(0, 4);

  return (
    <div className="flex flex-col md:w-[1000px] mt-2 gap-4 rounded-2xl">
      <div className="flex items-center justify-between pb-2 border-b-2 ">
        <Metric className="">{instrument}</Metric>
        <Button size="lg" variant="light" onClick={() => router.push(`/instrument/${instrument.toLowerCase()}`)}>
          See all
        </Button>
      </div>
      <div className="flex gap-5">
        {selectedMusician.map((musician) => (
          <MusicianPreview musician={musician} key={musician.id} />
        ))}
      </div>
    </div>
  );
};
