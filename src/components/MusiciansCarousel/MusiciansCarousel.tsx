import { Carousel } from 'react-responsive-carousel';

import { MusiciansSession } from '../MusiciansSession';

import { MusiciansByInstrumentContract } from '@/@types/musicianProps';

export const MusiciansCarousel = ({ allMusicians }: { allMusicians: MusiciansByInstrumentContract[] }) => {
  return (
    <Carousel
      showArrows={false}
      autoPlay
      showStatus={false}
      infiniteLoop
      emulateTouch
      showThumbs={false}
      className="pb-4 w-full lg:w-[990px]"
      showIndicators={false}
    >
      {allMusicians.map((musicians) => {
        return (
          <MusiciansSession
            key={musicians.instrument}
            instrument={musicians.instrument}
            musicians={musicians.musicians}
          />
        );
      })}
    </Carousel>
  );
};
