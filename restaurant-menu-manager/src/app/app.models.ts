import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Necesario para el ImageService
import { FormsModule } from '@angular/forms'; // Necesario para los formularios

import { AppComponent } from './app.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { DishListComponent } from './components/dish-list/dish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DishFormComponent,
    DishListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }