import { Action, createReducer, on } from '@ngrx/store';
import { IJokeState, initialJokeState } from '../state/joke.state';
import { JokeUIActions, JokeAPIActions } from '../actions';

const jokeReducer = createReducer(
  initialJokeState,
  on(
    JokeUIActions.appComponentInitialized,
    JokeUIActions.loadAllRequested,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    JokeAPIActions.loadAllSucceeded,
    JokeAPIActions.loadCategorySucceeded,
    (state, { jokes }) => ({
      ...state,
      jokes,
      isLoading: false,
    })
  ),
  on(
    JokeAPIActions.loadAllFailed,
    JokeAPIActions.loadCategoryFailed,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false,
    })
  )
);

export function reducer(state = initialJokeState, action: Action): IJokeState {
  return jokeReducer(state, action);
}

export const jokeFeatureKey = 'joke';
