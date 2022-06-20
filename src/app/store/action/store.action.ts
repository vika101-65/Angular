import { Action } from '@ngrx/store';

export enum RecipeAction {
  GetRecipes = '[Recipes] GetRecipes'
}

export class GetRecipes implements Action {
  readonly type = RecipeAction.GetRecipes;

  constructor (private payload: { ingridient:string }) {};
}

export type RecipeUnion = GetRecipes;