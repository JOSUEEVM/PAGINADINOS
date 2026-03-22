import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
  Inject
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = signal(false);
  navbarHidden = signal(false);

  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.showNavbar();
  }

  ngOnDestroy(): void {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }
    this.document.body.classList.remove('navbar-hidden');
  }

  toggleMenu() {
    this.menuOpen.update(value => !value);
    this.showNavbar();
  }

  showNavbar() {
    this.navbarHidden.set(false);
    this.document.body.classList.remove('navbar-hidden');
    this.startHideTimer();
  }

  private hideNavbar() {
    this.navbarHidden.set(true);
    this.document.body.classList.add('navbar-hidden');
  }

  private startHideTimer() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.hideTimer = setTimeout(() => {
      if (window.scrollY > 0 && !this.menuOpen()) {
        this.hideNavbar();
      }
    }, 2000);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY === 0) {
      this.navbarHidden.set(false);
      this.document.body.classList.remove('navbar-hidden');

      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
      }
      return;
    }

    this.showNavbar();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientY <= 80) {
      this.showNavbar();
    }
  }
}