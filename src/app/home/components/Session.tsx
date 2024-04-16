'use client';

import { useRouter } from 'next/navigation';

import { Button, Metric, MusicianPreview } from '@/components';

export const Session = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-[1000px] gap-4 rounded-2xl">
      <div className="flex items-center justify-between pb-2 border-b-2 ">
        <Metric className="">Instrument</Metric>
        <Button size="lg" variant="light" onClick={() => router.push('/instrument/guitar')}>
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
