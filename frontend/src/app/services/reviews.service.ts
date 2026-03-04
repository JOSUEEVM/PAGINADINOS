import { Injectable } from '@angular/core';

export type Review = {
  nombre: string;
  comentario: string;
  estrellas: number; // 1..5
  fecha: string;     // "hace 2 semanas", "hace 3 días", etc.
  localGuide?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {

  private reviews: Review[] = [
    {
      nombre: 'Carlos Méndez',
      comentario: 'Muy buena pizza y atención rápida. La masa está buenísima.',
      estrellas: 5,
      fecha: 'hace 1 semana',
      localGuide: true,
    },
    {
      nombre: 'Ana Ruiz',
      comentario: 'Buen sabor y porción. Solo que había mucha gente, pero valió la pena.',
      estrellas: 4,
      fecha: 'hace 3 días',
    },
    {
      nombre: 'Luis Gómez',
      comentario: 'Precios accesibles y el lugar se siente limpio. Recomendado.',
      estrellas: 5,
      fecha: 'hace 2 semanas',
      localGuide: true,
    },
  ];

  constructor() {}

  getReviews() {
    return this.reviews;
  }
}