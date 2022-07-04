import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ApiService {
  constructor(private http: HttpClient) { }

  app_id = '12476caf';
  app_key = '6c03b04030ecd0db4b348eedad60b883';
  
  onSearchRecipe(query: string): Observable<Object> { 
   return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${this.app_id}&app_key=${this.app_key}`)
  };

  getDescriptionRecipe (id: string): Observable<Object> {
    return this.http.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${this.app_id}&app_key=${this.app_key}`)
  }; 

   getCheese() {
    return  this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=cheese&app_id=${this.app_id}&app_key=${this.app_key}`)
  };

  getNextRecipe(url:string): Observable<Object> {
    return this.http.get(url)
  }
}
