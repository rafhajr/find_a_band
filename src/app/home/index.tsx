'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import { Session } from './components/Session';

import Band from '@/assets/bandaMusic.svg';
import { Header, SubTitle, Title } from '@/components';
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-default-700  items-center h-[500px] gap-8 px-12 py-12">
        <div className="flex items-center justify-evenly w-full">
          <div className="flex flex-col gap-2">
            <Title>Find Your Band</Title>
            <SubTitle>The best musicians are here</SubTitle>
          </div>
          <div className="flex">
            <Image src={Band} alt="band" width={650} className="rounded-ss-[60px] rounded-ee-[60px]" />
          </div>
        </div>
        <Carousel
          width={990}
          showArrows={false}
          autoPlay
          showStatus={false}
          infiniteLoop
          emulateTouch
          showThumbs={false}
        >
          <Session instrument="Bass" />
          <Session instrument="Drums" />
          <Session instrument="Guitar" />
          <Session instrument="Keyboard" />
          <Session instrument="Singer" />
        </Carousel>
      </div>
    </div>
  );
};
