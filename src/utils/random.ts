import { Random } from 'random-js';

export const random = new Random();

export const getRandomId = () => random.uuid4();
export const getRandomName = () => random.string(12);
