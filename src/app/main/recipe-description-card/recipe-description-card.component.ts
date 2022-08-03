import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ApiService } from 'src/app/service/api-sevice';
import { getDescriptionRecipeAction } from 'src/app/store/action/store.action';
import { selectDescriptionReciper } from 'src/app/store/selector/store.selector';

@Component({
  selector: 'app-recipe-description-card',
  templateUrl: './recipe-description-card.component.html',
  styleUrls: ['./recipe-description-card.component.css'],
  providers: [ApiService]
})
export class RecipeDescriptionCardComponent implements OnInit {

  id! : string;
  recipe! :any ;
  checkRecipe: boolean = false;
 
  constructor (private router: ActivatedRoute, private apiServise: ApiService, private store: Store) { }

   ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    
      this.store.dispatch(getDescriptionRecipeAction({idRecipe: this.id}));  

      this.store.select(selectDescriptionReciper).subscribe((recipe) => {
        this.recipe = recipe;
        
        if(this.recipe?.recipe) {
          this.checkRecipe = true;
        };
      });
    })
  }
}
