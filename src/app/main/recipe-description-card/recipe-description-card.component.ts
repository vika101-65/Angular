import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ApiService } from 'src/app/servise/api-sevice';

@Component({
  selector: 'app-recipe-description-card',
  templateUrl: './recipe-description-card.component.html',
  styleUrls: ['./recipe-description-card.component.css'],
  providers: [ApiService]
})
export class RecipeDescriptionCardComponent implements OnInit {

  id! : string;
  recipe$: any;
  t = 'dddd';

  constructor (private router: ActivatedRoute, private apiServise: ApiService, private http: HttpClient) { }

  person!: Observable<any> ;

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id']; console.log('id', this.id);
    
      // this.apiServise.getDescriptionRecipe(this.id)
      // .subscribe((data) => {
      //   this.recipe = data;
      //   console.log('===>', this.recipe);
      // })
      
    })
    this.recipe$ = this.apiServise.getDescriptionRecipe('6e7e7bbcb4ae4c2fc76226c0718d0fc2'); console.log('this.recipe$', this.recipe$)
  }
  
}
