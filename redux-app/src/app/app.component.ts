import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './contador/contador.actions';

interface AppState {
  contador: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      console.log("Subs:  ", state);
      this.contador = state.contador;

    })
  }

  incrementar() {
    this.store.dispatch(increment());
  }

  decrementar() {
    this.store.dispatch(decrement());

  }
}
