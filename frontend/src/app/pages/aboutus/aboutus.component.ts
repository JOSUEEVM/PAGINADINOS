import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsService, Review } from '../../services/reviews.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutUsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit() {
    // Cargar los comentarios desde el servicio
    this.reviews = this.reviewsService.getReviews();
  }

  // Para mostrar ★ llenas y ☆ vacías (sin librerías)
  starsArray(n: number) {
    const full = Math.max(0, Math.min(5, Math.round(n)));
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  initials(nombre: string) {
    const parts = nombre.trim().split(/\s+/);
    const a = parts[0]?.[0] ?? '';
    const b = parts[1]?.[0] ?? '';
    return (a + b).toUpperCase();
  }

  promedio() {
    const total = this.reviews.reduce((acc, r) => acc + r.estrellas, 0);
    return this.reviews.length ? (total / this.reviews.length).toFixed(1) : '0.0';
  }
}