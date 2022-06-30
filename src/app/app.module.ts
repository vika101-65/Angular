import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecipeSaerchComponent } from './main/recipe-saerch/recipe-saerch.component';
import { CardComponent } from './main/card/card.component';
import { RecipeDescriptionCardComponent } from './main/recipe-description-card/recipe-description-card.component';
import { ListOfRecipesComponent } from './main/list-of-recipes/list-of-recipes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { metaReducers, reducers } from './store/reduces/store.reduces';
import { ResEffect } from './store/effects/store.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeSaerchComponent,
    CardComponent,
    RecipeDescriptionCardComponent,
    ListOfRecipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
    }),
    EffectsModule.forRoot([ResEffect])
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
