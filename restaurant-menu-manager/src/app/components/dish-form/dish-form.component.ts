import { Component, EventEmitter, Output } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { DishService } from '../../services/dish.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    this.resetForm();
  }

  private resetForm(): void {
    this.model = {
      name: '',
      category: 'Principal',
      price: 0,
      description: ''
    };
  }

  // Métodos para manejar los eventos con tipado correcto
  updateName(event: Event): void {
    this.model.name = (event.target as HTMLInputElement).value;
  }

  updateCategory(event: Event): void {
    this.model.category = (event.target as HTMLSelectElement).value as 'Entrante' | 'Principal' | 'Postre' | 'Bebida';
  }

  updatePrice(event: Event): void {
    this.model.price = +(event.target as HTMLInputElement).value;
  }

  updateDescription(event: Event): void {
    this.model.description = (event.target as HTMLTextAreaElement).value;
  }
}