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
  prevArrHref: urlArr[] = [];
  startHref = '';
  indexActiveItem = 0;


  constructor(private store:Store) { };

  ngOnInit(): void {
    this.store.select(selectNextRecipes).subscribe((state) => {

      if(this.startHref.length === 0) {
        this.startHref = state;
      }
      return this.nextHref = state;
    })
  };

  changeActiveItem (index: number, switchItem: boolean) : urlArr {
    return this.arrHref[index] = {
      ...this.arrHref[index],
      activItem: switchItem
      };
  };

  onGetNextPegeRecipes () {
    this.store.dispatch(getNextRecipesAction({url: this.nextHref}));
    
    if(this.indexActiveItem === this.arrHref.length - 1) {
      this.number += 1;
      this.arrHref[this.indexActiveItem] = {
        ...this.arrHref[this.indexActiveItem],
        activItem: false
      };

      this.indexActiveItem < 4 ? this.indexActiveItem += 1 : this.indexActiveItem; 
      this.arrHref.push({page:this.number, url: this.nextHref, activItem: true});

      if (this.arrHref.length > 5) {
        const deletItem: urlArr | undefined= this.arrHref.shift(); 
        
        if (deletItem) {
          this.prevArrHref.push(deletItem);
        };
      }; 
    } else {
      this.changeActiveItem(this.indexActiveItem, false);
      this.indexActiveItem < 4 ? this.indexActiveItem += 1 : this.indexActiveItem; 
      this.changeActiveItem(this.indexActiveItem, true);
    }; 
    console.log('++++++',  this.indexActiveItem)
  };

  onGetPreviousPageRecipes () {
    if ( (0 < this.indexActiveItem) && (this.indexActiveItem < 5)) {
      this.changeActiveItem(this.indexActiveItem, false);
      this.indexActiveItem -= 1;
      this.store.dispatch(getNextRecipesAction({url: this.arrHref[this.indexActiveItem].url}));
      this.changeActiveItem(this.indexActiveItem, true);
    };

    if(this.indexActiveItem === 0 && this.number > 5) {
      this.arrHref.pop();
      const prevItem: urlArr | undefined = this.prevArrHref.pop();

      if (prevItem) {
        this.arrHref.unshift(prevItem)
      };
      this.store.dispatch(getNextRecipesAction({url: this.arrHref[this.indexActiveItem].url}));
    };

    console.log('===========', this.indexActiveItem)
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
