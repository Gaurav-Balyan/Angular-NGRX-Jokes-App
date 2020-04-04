import { Joke } from '../../models/joke.interface';

export interface IJokeState {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
}

export const initialJokeState: IJokeState = {
  jokes: [],
  isLoading: false,
  error: '',
};
