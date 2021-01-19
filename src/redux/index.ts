import { createStore, combineReducers } from 'redux';
import { contaReducer } from './Conta/Conta.reducer';
import { messageReducer } from './Message/Message.reducer';

const reducers = combineReducers({
    contas: contaReducer,
    messages: messageReducer
});

const store = createStore(
    reducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export interface Action<T = any> {
    type: string,
    payload?: T
}

export type RootState = ReturnType<typeof reducers>;

export default store;
