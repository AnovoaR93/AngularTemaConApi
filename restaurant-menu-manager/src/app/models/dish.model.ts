export interface Dish {
  id: number;
  name: string;
  category: 'Entrante' | 'Principal' | 'Postre' | 'Bebida';
  price: number;
  description: string;
  available: boolean;
  imageUrl: string;
  imageAlt: string;
}