import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {catchError, delay, map, switchMap} from 'rxjs/operators';
// import { from, mergeMap, switchMap, catchError } from "rxjs";
import { ApiService } from "src/app/service/api-sevice";
// import { map } from 'rxjs/operators';
import { errorAction, successGetDesRecipeAction, successGetRecipsAction } from '../action/store.action';

@Injectable()
export class ResEffect {

  constructor(
    private actions$: Actions,
    private store: Store,
    private apiService: ApiService
  ) {};

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('get recips'),

      switchMap(({ingridient}) =>{
        
        return  this.apiService.onSearchRecipe(ingridient).pipe(
          map((todo:any) => {
            
            return successGetRecipsAction({recipes:todo})
          }),
          catchError(() => {
            console.log('erro')
            return [errorAction()]})
        )
      })      
    )
  });

  loadDescription$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('get description'),

      switchMap(({idRecipe}) => {

        return this.apiService.getDescriptionRecipe(idRecipe).pipe(
          map((recipe:any) => {
            return successGetDesRecipeAction({payload: recipe})
          })
        )
      })
    )
  });

  loadNextRecipes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('get next recips'),

      switchMap(({url}) => {
        return this.apiService.getNextRecipe(url).pipe(
          map((todo:any) => {
            
            return successGetRecipsAction({recipes:todo})
          }),
          catchError(() => {
            console.log('erro')
            return [errorAction()]})
        )
      })
    )
  })
 
}
