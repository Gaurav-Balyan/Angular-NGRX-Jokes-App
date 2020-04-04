import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JokeUIActions } from './store/actions';
import { selectAppComponentViewModel } from './store/selectors/joke.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appComponentViewModel$ = this.store.select(selectAppComponentViewModel);

  ngOnInit() {
    this.store.dispatch(JokeUIActions.appComponentInitialized());
  }

  onLoadAllRequested() {
    this.store.dispatch(JokeUIActions.loadAllRequested());
  }

  onLoadCategoryRequested(category: string) {
    this.store.dispatch(JokeUIActions.loadCategoryRequested({ category }));
  }

  constructor(private store: Store<{}>) {}
}
