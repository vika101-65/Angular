import { createReducer, on, ActionReducer, MetaReducer, ActionReducerMap } from "@ngrx/store";
import { errorAction, getDescriptionRecipeAction, getNextRecipesAction, getRecipsAction, successGetDesRecipeAction, successGetRecipsAction } from "../action/store.action";

export interface Res {
  recipes?: [],
  status?: string,
  link?: string
};

export const initialState: Res ={

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
      status: 'resolved',
      link: recipes['_links'].next.href
    }
  }),
  
  on(errorAction, (state) => {
    return {
      ...state,
      status: 'error'
    }
  }),

  on(getNextRecipesAction, (state) => {
    return {
      ...state,
      status: 'pending'
    }
  })
);

export const decReduce = createReducer(
  initialState,

  on(getDescriptionRecipeAction, (state) => {
    return {
      ...state,
      descripRecip: {status: 'pending'},
    }
  }),

  on(successGetDesRecipeAction, (state, {payload}) => {
    return {
      ...state,
      descripRecip: {
        status: 'resolved',
        payload
      },
    }
  })

);

export const reducers: ActionReducerMap<any>= {
  ct: resReduce,
  decReduce
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log('state', state);
    // console.log('action', action);
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<any>[] = [debug];