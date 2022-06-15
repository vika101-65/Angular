import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipeDescriptionCardComponent } from './main/recipe-description-card/recipe-description-card.component';
import { RecipeSaerchComponent } from './main/recipe-saerch/recipe-saerch.component';

const routes: Routes = [
  { path: ' ', component: HeaderComponent},
  { path: 'recipe', component: RecipeSaerchComponent},
  { path: 'recipe/:id', component: RecipeDescriptionCardComponent },
  // { path: 'vika', component: VikaComponent }
  // { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
