import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectListRecipes, selectRecipes, selectStatusRecipes } from 'src/app/store/selector/store.selector';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.css']
})

export class ListOfRecipesComponent implements OnInit {

  listOfRecipes$ = this.store.select(selectListRecipes);
  statusRecipes$ = this.store.select(selectStatusRecipes);
  recipes = [];
  statusLoading : 'resolved' | '' | 'pending' = '';
  status = false;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.select(selectRecipes).subscribe((state:any) => {
      this.recipes = state.recipes;
      this.statusLoading = state.status;
      
      if (state.status === 'resolved') {
        this.status = true;
      };
    })
  }

}
