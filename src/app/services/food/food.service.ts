import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Vegetable Pizza',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['pakistani'],
        stars: 4.9,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Jelapino Burger',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['italian'],
        stars: 4.1,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Burger', 'Lunch', 'Dinner'],
      },
      {
        id: 3,
        name: 'Saucy Fries',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['german'],
        stars: 4.0,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Fries', 'Lunch'],
      },
      {
        id: 4,
        name: 'Meat Burger',
        price: 15,
        cookTime: '20-30',
        favorite: false,
        origins: ['persian', 'middle east'],
        stars: 4.7,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 5,
        name: 'Spicy Saucy Pizza',
        price: 10,
        cookTime: '15-20',
        favorite: false,
        origins: ['german', 'italian'],
        stars: 4.0,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Saucy Cheesy Pizza',
        price: 20,
        cookTime: '10-20',
        favorite: false,
        origins: ['pakistani', 'italian'],
        stars: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Layered Spicy Noodles',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['china', 'german'],
        stars: 3.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Noodles', 'Lunch', 'Dinner'],
      },
      {
        id: 8,
        name: 'Club Sandwich & Garlic Fries',
        price: 15,
        cookTime: '15-20',
        favorite: false,
        origins: ['pakistani'],
        stars: 4.0,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'club sandwich', 'Lunch'],
      },
    ];
  }
}
