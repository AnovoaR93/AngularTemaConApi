import { Component, EventEmitter, Output } from '@angular/core';
import { Dish } from '../../models/dish.models'; 
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent {
  @Output() dishAdded = new EventEmitter<void>();
  
  categories = ['Entrante', 'Principal', 'Postre', 'Bebida'];
  
  model: Omit<Dish, 'id' | 'available' | 'imageUrl' | 'imageAlt'> = {
    name: '',
    category: 'Principal',
    price: 0,
    description: ''
  };

  constructor(private dishService: DishService) {}

  onSubmit(): void { 
    this.dishService.addDish(this.model); 
    this.dishAdded.emit(); 
    this.model = { 
      name: '',
      category: 'Principal',
      price: 0,
      description: ''
    };
  }
}