import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-saerch',
  templateUrl: './recipe-saerch.component.html',
  styleUrls: ['./recipe-saerch.component.css']
})
export class RecipeSaerchComponent {

  constructor(private http: HttpClient) { }

  app_id = '12476caf';
  app_key = '6c03b04030ecd0db4b348eedad60b883';
  query = '';
  listOfRecipes = [];


  onSearchRecipe(): void { 
     this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${this.query}&app_id=${this.app_id}&app_key=${this.app_key}`)
    .subscribe((data:any) => {
      console.log(data);
      this.listOfRecipes = data.hits;
      console.log(this.listOfRecipes);
    });
    console.log("query",this.query); 
    this.query = '';
    
  }

}
