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
  recipe!: any;
  t = 'dddd';

  constructor (private router: ActivatedRoute, private apiservise: ApiService) { }

  ngOnInit(): void {
    console.log('roter', this.router);
    this.router.params.subscribe((params: Params) => {
      this.id = params['id']; console.log('id', this.id);
    
      // this.apiservise.getDescriptionRecipe(this.id)
      // .subscribe((data) => {
      //   this.recipe = data;
      //   console.log('===>', this.recipe);
      // })
    })
    this.recipe = this.apiservise.getDescriptionRecipe(this.id).pipe( map((resurt:any) => resurt.text)); console.log('this.recipe', this.recipe)
  }
  // )};

}
