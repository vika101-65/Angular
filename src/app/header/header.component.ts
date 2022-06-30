import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRecipes } from '../store/selector/store.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  photos$ = this.store.select(selectRecipes);
  constructor (private store: Store) { };

  ngOnInit(): void {
    
  }
}
