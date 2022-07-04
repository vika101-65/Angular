import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNextRecipesAction } from '../store/action/store.action';
import { selectNextRecipes } from '../store/selector/store.selector';

export interface urlArr {
  page: number,
  url: string
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  nextHref = '';
  number = 1;
  arrHref : urlArr[]= [{page: this.number, url: ''}];
  prevHref = '';


  constructor(private store:Store) { };

  ngOnInit(): void {
    this.store.select(selectNextRecipes).subscribe((state) => this.nextHref = state)
  };

  onGetNextPegeRecipes () {
    this.prevHref = this.nextHref;
    this.store.dispatch(getNextRecipesAction({url: this.nextHref}));
    this.number += 1;
    this.arrHref.push({page:this.number, url: this.nextHref});
  };

  onGetPreviousPageRecipes () {
    this.store.dispatch(getNextRecipesAction({url: this.prevHref}));
    
    if (this.number >= 5) {
      this.arrHref.pop();
      this.number -= 1;
    }; 
  };

  onGetAnyPage(url:string) {
    this.store.dispatch(getNextRecipesAction({url: url}));
  }

}
