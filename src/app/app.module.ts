import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeStateModule } from './store/joke-state.module';
import { JokeCardListComponent } from './components/joke-card-list/joke-card-list.component';
import { JokeCardItemComponent } from './components/joke-card-item/joke-card-item.component';

@NgModule({
  declarations: [AppComponent, JokeCardListComponent, JokeCardItemComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    AppRoutingModule,
    JokeStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
