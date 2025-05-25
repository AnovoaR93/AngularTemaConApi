import { Component, ViewChild } from '@angular/core';
import { DishListComponent } from './components/dish-list/dish-list.component';

@Component({
  selector: 'app-root',
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
