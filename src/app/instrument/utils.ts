import Bass from '@/assets/bassPlayer.svg';
import Drums from '@/assets/drummer.svg';
import Guitar from '@/assets/guitarPlayer.svg';
import Keyboard from '@/assets/keyboardPlayer.svg';
import Singer from '@/assets/singer.svg';

export const getInstrumentPageInfo = (instrument: string) => {
  if (instrument === 'guitar') {
    return { title: 'Guitar', image: Guitar, width: 200 };
  }
  if (instrument === 'bass') {
    return { title: 'Bass', image: Bass, width: 270 };
  }
  if (instrument === 'drums') {
    return { title: 'Drums', image: Drums, width: 360 };
  }
  if (instrument === 'keyboard') {
    return { title: 'Keyboard', image: Keyboard, width: 250 };
  }

  return { title: 'Singer', image: Singer, width: 170 };
};

export const validInstruments = ['guitar', 'drums', 'keyboard', 'bass', 'singer'];
