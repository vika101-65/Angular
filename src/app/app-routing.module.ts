import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListOfRecipesComponent } from './main/list-of-recipes/list-of-recipes.component';
import { RecipeDescriptionCardComponent } from './main/recipe-description-card/recipe-description-card.component';

const routes: Routes = [
  { path: ' ', component: HeaderComponent},
  { path: 'recipes', component: ListOfRecipesComponent},
  { path: 'recipe/:id', component: RecipeDescriptionCardComponent },
  // { path: 'vika', component: VikaComponent }
  // { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
