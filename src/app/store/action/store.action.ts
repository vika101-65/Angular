import { createAction, props } from "@ngrx/store";

export const getRecipsAction = createAction('get recips', 
  props<{ingridient:string}>()
);
export const successGetRecipsAction = createAction('success', props<{recipes:{}}>());
export const errorAction = createAction('error');

export const getDescriptionRecipeAction = createAction('get description', props<{idRecipe: string}>());
export const successGetDesRecipeAction = createAction('success recipe', props<{payload: {}}>());
