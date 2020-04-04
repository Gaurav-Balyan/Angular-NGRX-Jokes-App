import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IJokeState } from '../state/joke.state';
import * as fromJoke from '../reducers/joke.reducer';

const getJokeState = createFeatureSelector<IJokeState>(fromJoke.jokeFeatureKey);

export const selectJokeList = createSelector(
  getJokeState,
  (state) => state.jokes
);

export const selectJokeError = createSelector(
  getJokeState,
  (state) => state.error
);

export const selectJokeIsLoading = createSelector(
  getJokeState,
  (state) => state.isLoading
);

export const selectAppComponentViewModel = createSelector(
  selectJokeList,
  selectJokeError,
  selectJokeIsLoading,
  (jokes, error, loading) => ({
    jokes,
    error,
    loading,
  })
);
