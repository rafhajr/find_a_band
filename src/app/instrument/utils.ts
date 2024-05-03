import musicians from '@/@fakeData/fakeData.json';
import Bass from '@/assets/bassPlayer.svg';
import Drums from '@/assets/drummer.svg';
import Guitar from '@/assets/guitarPlayer.svg';
import Keyboard from '@/assets/keyboardPlayer.svg';
import Singer from '@/assets/singer.svg';

const { singers, bassPlayers, drummers, guitarPlayers, keyboardPlayers } = musicians;

export const getInstrumentPageInfo = (instrument: string) => {
  switch (instrument) {
    case 'guitar':
      return { title: 'Guitar', image: Guitar, width: 200, musicians: guitarPlayers };
    case 'bass':
      return { title: 'Bass', image: Bass, width: 270, musicians: bassPlayers };
    case 'drums':
      return { title: 'Drums', image: Drums, width: 360, musicians: drummers };
    case 'keyboard':
      return { title: 'Keyboard', image: Keyboard, width: 250, musicians: keyboardPlayers };
    default:
      return { title: 'Singer', image: Singer, width: 170, musicians: singers };
  }
};

export const validInstruments: string[] = ['guitar', 'drums', 'keyboard', 'bass', 'singer'];
