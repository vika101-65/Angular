import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecipeSaerchComponent } from './main/recipe-saerch/recipe-saerch.component';
import { CardComponent } from './main/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeSaerchComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
