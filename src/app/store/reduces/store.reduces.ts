import { createReducer, on } from "@ngrx/store";
import { errorAction, getRecipsAction, successGetRecipsAction } from "../action/store.action";

export interface Res {
  recipes: [],
  status?: string,
};

export const initialState: Res ={
  recipes: [],
};

export const resReduce = createReducer(
  initialState,
  on(getRecipsAction, (state) => {
      return {
        ...state,
        status: 'pending'
      }
    }),
  on(successGetRecipsAction, (state, {recipes}:any)=> {
    return {
      ...state,
      recipes: recipes['hits'],
      status: 'resolved'
    }
  }),
  on(errorAction, (state) => {
    return {
      ...state,
      status: 'error'
    }
  })  
);
