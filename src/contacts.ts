import contacts from './data.json';
import { generateShortId, shuffleArray } from './utils';

interface IContacts {
  id: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  address: string;
  picture: string;
  filmName: string;
  filmUrl: string;
}

export function getContacts(randomize?: boolean): IContacts[] {
  if (!randomize) {
    return contacts;
  }
  return shuffleArray(contacts).map(c => ({
    ...c,
    picture: `https://robohash.org/${generateShortId(24)}.png`
  }));
}
