import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { JokeEffects } from './effects/joke.effects';
import * as fromJoke from './reducers/joke.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromJoke.jokeFeatureKey, fromJoke.reducer),
    EffectsModule.forFeature([JokeEffects]),
  ],
})
export class JokeStateModule {}
