import { Joke } from './joke.interface';

export interface JokeResult {
  type: string;
  value: Joke[];
}
