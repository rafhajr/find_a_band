'use client';

import { useRouter } from 'next/navigation';

import { Button, CardTitle, MusicianPreview } from '@/components';

export const Sessions = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 w-full rounded-2xl">
      <div className="flex items-center justify-between pb-2 border-b-1 border-default-600">
        <CardTitle className="text-default-600">Instrument</CardTitle>
        <Button variant="bordered" onClick={() => router.push('/instrument/guitar')}>
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
