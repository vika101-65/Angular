import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectListRecipes, selectStatusRecipes } from 'src/app/store/selector/store.selector';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.css']
})
export class ListOfRecipesComponent implements OnInit {

  listOfRecipes$ = this.store.select(selectListRecipes);
  statusRecipes = this.store.select(selectStatusRecipes);
  recipes = [];

  constructor(private store: Store) { };

  ngOnInit(): void {
   this.listOfRecipes$.subscribe(state =>{
      this.recipes = state;
      console.log('tttttt', this.recipes)}
    )
  }

}
