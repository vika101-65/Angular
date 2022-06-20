import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-recipes',
  templateUrl: './list-of-recipes.component.html',
  styleUrls: ['./list-of-recipes.component.css']
})
export class ListOfRecipesComponent implements OnInit {

  @Input() listOfRecipes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
