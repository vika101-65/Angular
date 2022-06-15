import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges{

  @Input() recipe: any = {};

  constructor() { }
  
  urlImage = '';
  label = '';
  idRecipe = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    this.urlImage = this.recipe.recipe?.images.REGULAR.url;
    this.label = this.recipe.recipe?.label;
    this.idRecipe = this.getIdRecipe(this.recipe.recipe?.uri);
  }
    
  getIdRecipe (uri: string): string {
     return uri.split('_')[1];
  }
}
