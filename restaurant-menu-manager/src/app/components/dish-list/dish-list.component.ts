import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { DishService } from '../../services/dish.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  imports: [CommonModule], 
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];
  filteredDishes: Dish[] = [];
  selectedCategory: string = 'Todos';

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(): void {
    this.dishes = this.dishService.getDishes();
    this.filterDishes();
  }

  toggleAvailability(id: number): void {
    this.dishService.toggleAvailability(id);
    this.loadDishes();
  }

  deleteDish(id: number): void {
    if(confirm('¿Estás seguro de que quieres eliminar este plato?')) {
      this.dishService.deleteDish(id);
      this.loadDishes();
    }
  }

  filterDishes(category: string = 'Todos'): void {
    this.selectedCategory = category;
    this.filteredDishes = category === 'Todos' 
      ? this.dishes 
      : this.dishes.filter(dish => dish.category === category);
  }

  getCategories(): string[] {
    return ['Todos', ...new Set(this.dishes.map(dish => dish.category))];
  }
}
