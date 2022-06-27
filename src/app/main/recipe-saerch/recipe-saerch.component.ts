import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/servise/api-sevice';
import { getRecipsAction } from 'src/app/store/action/store.action';
@Component({
  selector: 'app-recipe-saerch',
  templateUrl: './recipe-saerch.component.html',
  styleUrls: ['./recipe-saerch.component.css'],
  providers: [ApiService],
})
export class RecipeSaerchComponent {

  constructor (private apiService: ApiService, private store: Store) {}
 
  query = '';
 
  onSearchRecipe() {
    this.store.dispatch( getRecipsAction({ingridient: this.query}));
    this.query = '';
  }
  
}
