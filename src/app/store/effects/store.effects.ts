import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {catchError, delay, map, switchMap} from 'rxjs/operators';
// import { from, mergeMap, switchMap, catchError } from "rxjs";
import { ApiService } from "src/app/servise/api-sevice";
// import { map } from 'rxjs/operators';
import { errorAction, successGetRecipsAction } from '../action/store.action';

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
        console.log('ingridient', ingridient)
        return  this.apiService.onSearchRecipe(ingridient).pipe(
          map((todo:any) => {
            console.log('r', todo);
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
