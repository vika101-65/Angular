import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servise/api-sevice';
@Component({
  selector: 'app-recipe-saerch',
  templateUrl: './recipe-saerch.component.html',
  styleUrls: ['./recipe-saerch.component.css'],
  providers: [ApiService],
})
export class RecipeSaerchComponent {

  constructor (private apiService: ApiService) {}
 
  query = '';
  listOfRecipes = [];

  onSearchRecipe () {
   this.apiService.onSearchRecipe(this.query)
   .subscribe((data:any) => { console.log('data', data);
      this.listOfRecipes = data.hits;
      console.log(this.listOfRecipes);
     });

     this.query = ''; 
  };
  
}
