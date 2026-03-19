import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Promotion, PromotionsData } from '../../services/promotions.services';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css'
})
export class PromotionsComponent implements OnInit, OnDestroy {
  private promotionsData = new PromotionsData();

  promotions: Promotion[] = [];
  currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.promotions = this.promotionsData.getPromotions();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    if (!this.promotions.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.promotions.length;
    this.restartAutoSlide();
  }

  prevSlide(): void {
    if (!this.promotions.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.promotions.length) % this.promotions.length;
    this.restartAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.promotions.length;
    }, 10000);
  }

  private stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}