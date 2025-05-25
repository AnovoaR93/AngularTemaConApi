import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    DishFormComponent, 
    DishListComponent,
    FormsModule 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurante Delicioso';
  @ViewChild('dishList') dishList!: DishListComponent;

  onDishAdded(): void {
    this.dishList.loadDishes();
  }
}
