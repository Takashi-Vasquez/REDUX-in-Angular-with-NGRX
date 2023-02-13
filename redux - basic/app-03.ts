import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Action, Reducer } from './ngrx-fake/ngrx';
class Store<T>{
    // private state: T;

    constructor(private reducer: Reducer<T>, private state: T) {
    }

    getState() {
        return this.state
    }

    dispath(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10)

console.log(store.getState());

store.dispath(incrementadorAction);

console.log(store.getState());
