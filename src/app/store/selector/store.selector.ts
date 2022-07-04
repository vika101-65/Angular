import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';

export const selectRecipes = createFeatureSelector( 'ct');

export const selectListRecipes = createSelector(selectRecipes, (state:any) => state.recipes);

export const selectStatusRecipes = createSelector(selectRecipes, (state:any) => state.status);


export const selectDescription = createFeatureSelector( 'decReduce');
export const selectDescriptionReciper = createSelector(selectDescription , (state:any) => state.descripRecip.payload);

export const selectNextRecipes = createSelector(selectRecipes, (state:any) => state.link);

