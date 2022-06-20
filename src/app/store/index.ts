import { ActionReducerMap } from '@ngrx/store';
import { StateForStore, recipeReduces } from './reduces/store.reduces';

export const rootReducer = {};

export interface AppState {
    state: StateForStore;
};


export const reducers: ActionReducerMap<AppState, any> = {
    state: recipeReduces
};