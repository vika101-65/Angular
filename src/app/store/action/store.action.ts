import { createAction, props } from "@ngrx/store";

export const getRecipsAction = createAction('get recips', 
  props<{ingridient:string}>()
);
export const successGetRecipsAction = createAction('success', props<{recipes:{}}>());
export const errorAction = createAction('error');
