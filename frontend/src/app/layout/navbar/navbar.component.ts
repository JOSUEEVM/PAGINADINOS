import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
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

  private lastScrollY = 0;
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.showNavbar();

    if (this.isBrowser) {
      this.lastScrollY = window.scrollY;
    }
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('navbar-hidden');
  }

  toggleMenu() {
    this.menuOpen.update(value => !value);

    if (this.menuOpen()) {
      this.showNavbar();
    }
  }

  showNavbar() {
    this.navbarHidden.set(false);
    this.document.body.classList.remove('navbar-hidden');
  }

  hideNavbar() {
    if (!this.menuOpen()) {
      this.navbarHidden.set(true);
      this.document.body.classList.add('navbar-hidden');
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser) return;

    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = this.document.documentElement.scrollHeight;

    const isAtTop = currentScrollY <= 0;
    const isAtBottom = currentScrollY + windowHeight >= documentHeight - 2;

    if (isAtTop) {
      this.showNavbar();
      this.lastScrollY = currentScrollY;
      return;
    }

    if (this.menuOpen()) {
      this.showNavbar();
      this.lastScrollY = currentScrollY;
      return;
    }

    if (isAtBottom) {
      this.showNavbar();
      this.lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY > this.lastScrollY) {
      this.hideNavbar();
    } else {
      this.showNavbar();
    }

    this.lastScrollY = currentScrollY;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isBrowser) return;

    if (event.clientY <= 80) {
      this.showNavbar();
    }
  }
}