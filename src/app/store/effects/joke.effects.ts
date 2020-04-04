import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { JokeService } from '../../services/joke.service';
import { JokeUIActions, JokeAPIActions } from '../actions';

@Injectable()
export class JokeEffects {
  constructor(private jokeService: JokeService, private action$: Actions) {}

  loadAllJokes$ = createEffect(() =>
    this.action$.pipe(
      ofType(
        JokeUIActions.appComponentInitialized,
        JokeUIActions.loadAllRequested
      ),
      mergeMap(() =>
        this.jokeService.getJokes().pipe(
          map((jokes) => JokeAPIActions.loadAllSucceeded({ jokes })),
          catchError((error) =>
            of(JokeAPIActions.loadAllFailed({ error: error.message }))
          )
        )
      )
    )
  );

  loadCategoryJokes$ = createEffect(() =>
    this.action$.pipe(
      ofType(JokeUIActions.loadCategoryRequested),
      mergeMap((action) =>
        this.jokeService.getJokesByCategory(action.category).pipe(
          map((jokes) => JokeAPIActions.loadCategorySucceeded({ jokes })),
          catchError((error) =>
            of(JokeAPIActions.loadCategoryFailed({ error: error.message }))
          )
        )
      )
    )
  );

  showAlertOnFailure$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(JokeAPIActions.loadAllFailed),
        tap(({ error }) => window.alert(error))
      ),
    { dispatch: false }
  );
}
