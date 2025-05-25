import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dishes: Dish[] = [];
  private nextId = 1;

  constructor(private imageService: ImageService) {
    this.loadDishes();
  }
  

  getDishes(): Dish[] {
    return this.dishes;
  }

  addDish(dish: Omit<Dish, 'id' | 'available' | 'imageUrl' | 'imageAlt'>): void {
  this.imageService.getDishImage(dish.name, dish.category).subscribe(image => {
    const newDish: Dish = {
      id: this.nextId++,
      ...dish,
      available: true,
      imageUrl: image.url,
      imageAlt: image.alt
    };
    this.dishes.push(newDish);
    this.saveDishes();
  });
}

  toggleAvailability(id: number): void {
    const dish = this.dishes.find(d => d.id === id);
    if (dish) {
      dish.available = !dish.available;
      this.saveDishes();
    }
  }

  deleteDish(id: number): void {
    this.dishes = this.dishes.filter(d => d.id !== id);
    this.saveDishes();
  }

private saveDishes(): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('restaurantDishes', JSON.stringify({
      dishes: this.dishes,
      nextId: this.nextId
    }));
  }
}

private loadDishes(): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = localStorage.getItem('restaurantDishes');
    if (data) {
      const parsed = JSON.parse(data);
      this.dishes = parsed.dishes;
      this.nextId = parsed.nextId;
    }
  }
}
}
