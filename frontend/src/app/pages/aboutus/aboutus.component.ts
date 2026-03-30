
import { LocalImagesService, LocalImage } from '../../services/local.services';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutUsComponent implements OnInit, OnDestroy {
  localImages: LocalImage[] = [];
  currentImageIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private localImagesService: LocalImagesService) {}

  ngOnInit(): void {
    this.localImages = this.localImagesService.getImages();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  get currentImage(): LocalImage | null {
    return this.localImages.length ? this.localImages[this.currentImageIndex] : null;
  }

  nextImage(): void {
    if (!this.localImages.length) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.localImages.length;
    this.restartAutoSlide();
  }

  prevImage(): void {
    if (!this.localImages.length) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.localImages.length) % this.localImages.length;
    this.restartAutoSlide();
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
    this.restartAutoSlide();
  }

  private startAutoSlide(): void {
    if (!this.localImages.length) return;

    this.intervalId = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.localImages.length;
    }, 5000);
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