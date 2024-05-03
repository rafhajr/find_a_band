'use client';

import Image from 'next/image';

import { allMusicians } from '@/@fakeData/getFakeData';
import BandImage from '@/assets/bandaMusic.svg';
import { Header, MusiciansCarousel, SubTitle, Title } from '@/components';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-default-700  items-center h-[500px] gap-8 p-5 py-12">
        <div className="flex items-center flex-col md:flex-row justify-evenly w-full">
          <div className="flex flex-col gap-2">
            <Title>Find Your Band</Title>
            <SubTitle>The best musicians are here</SubTitle>
          </div>
          <div className="flex">
            <Image
              src={BandImage}
              alt="band"
              width={650}
              height={500}
              className="rounded-ss-[60px] rounded-ee-[60px]"
            />
          </div>
        </div>
        <MusiciansCarousel allMusicians={allMusicians} />
      </div>
    </div>
  );
};
