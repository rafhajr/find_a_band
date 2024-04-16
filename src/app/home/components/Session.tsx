'use client';

import { useRouter } from 'next/navigation';

import { Button, Metric, MusicianPreview } from '@/components';

type SessionProps = {
  instrument: string;
};

export const Session = ({ instrument }: SessionProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-[1000px] mt-2 gap-4 rounded-2xl">
      <div className="flex items-center justify-between pb-2 border-b-2 ">
        <Metric className="">{instrument}</Metric>
        <Button size="lg" variant="light" onClick={() => router.push(`/instrument/${instrument.toLowerCase()}`)}>
          See all
        </Button>
      </div>
      <div className="flex gap-5">
        <MusicianPreview />
        <MusicianPreview />
        <MusicianPreview />
        <MusicianPreview />
      </div>
    </div>
  );
};
