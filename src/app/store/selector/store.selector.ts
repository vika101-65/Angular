import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';

export const selectRecipes = createFeatureSelector( 'ct');

export const selectListRecipes = createSelector(selectRecipes, (state:any) => {
  console.log('============', state.recipes);
  return state.recipes;
});

export const selectStatusRecipes = createSelector(selectRecipes, (state:any) => state.status);
