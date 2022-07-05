import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNextRecipesAction } from '../store/action/store.action';
import { selectNextRecipes } from '../store/selector/store.selector';

export interface urlArr {
  page: number,
  url: string,
  activItem: boolean
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  nextHref = '';
  number = 1;
  arrHref : urlArr[]= [{page: this.number, url: '', activItem: true}];
  prevHref = '';
  indexActiveItem = 0;


  constructor(private store:Store) { };

  ngOnInit(): void {
    this.store.select(selectNextRecipes).subscribe((state) => this.nextHref = state)
  };

  changeActiveItem (index: number, switchItem: boolean) : urlArr {
    return this.arrHref[this.indexActiveItem] = {
      ...this.arrHref[this.indexActiveItem],
      activItem: switchItem
      };
  };

  onGetNextPegeRecipes () {
    this.prevHref = this.nextHref;
    this.store.dispatch(getNextRecipesAction({url: this.nextHref}));
    
    if(this.indexActiveItem === this.arrHref.length - 1) {
      this.number += 1;
      this.arrHref[this.indexActiveItem] = {
        ...this.arrHref[this.indexActiveItem],
        activItem: false
      };
      console.log('this.arrHref1',this.arrHref)
      this.arrHref.push({page:this.number, url: this.nextHref, activItem: true});

      if (this.arrHref.length > 5) {
        this.arrHref.shift();
      }; console.log('this.arrHref',this.arrHref)
    } else {
      this.changeActiveItem(this.indexActiveItem, false);
      this.indexActiveItem += 1;
      this.changeActiveItem(this.indexActiveItem, true);
    }; 
  };

  onGetPreviousPageRecipes () {
    this.store.dispatch(getNextRecipesAction({url: this.prevHref}));
    
    if (this.number >= 5) {
      this.arrHref.pop();
      this.number -= 1;
    }; 
  };

  onGetAnyPage(item:urlArr, i: number) {
    this.store.dispatch(getNextRecipesAction({url: item.url}));
    this.indexActiveItem = i; 

    this.arrHref = this.arrHref.map((value: urlArr, index: number) => {

      if (index === this.indexActiveItem) {
        return {
          ... value,
          activItem: true
        }
      };
      return {
        ... value,
        activItem: false
      }
    });

  };

}
