import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideAnimation } from './pizza-animations';
import { PizzaMenu } from '../../services/pizzamenu.data';

@Component({
  selector: 'app-pizza-modal',
  standalone: true,
  imports: [CommonModule],
  animations: [slideAnimation],
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css']
})
export class PizzaModalComponent implements OnInit, OnDestroy {

  @Input() pizza: any;
  @Output() close = new EventEmitter<void>();

  menu = new PizzaMenu();
  currentIndex = 0;

  direction: 'left' | 'right' = 'right';
  animationKey = 0;

  private autoSlideInterval: any;

  // 👉 NUEVO: soporte swipe
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('PizzaModalComponent ngOnInit - pizza recibida:', this.pizza);

    if (this.pizza) {
      this.currentIndex = this.menu.pizzas.findIndex(
        p => p.nombre === this.pizza.nombre
      );
    }

    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  get pizzaActual() {
    return this.menu.pizzas[this.currentIndex];
  }

  siguiente() {
    this.direction = 'left';
    this.animationKey++;
    this.currentIndex =
      (this.currentIndex + 1) % this.menu.pizzas.length;

    this.cdr.detectChanges();
    this.resetAutoSlide(); // 👉 opcional pero recomendado
  }

  anterior() {
    this.direction = 'right';
    this.animationKey++;
    this.currentIndex =
      (this.currentIndex - 1 + this.menu.pizzas.length) %
      this.menu.pizzas.length;

    this.cdr.detectChanges();
    this.resetAutoSlide(); // 👉 opcional
  }

  closeModal() {
    this.close.emit();
  }

  // =====================
  // 👉 SWIPE MÓVIL
  // =====================

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.stopAutoSlide(); // pausa autoslide mientras toca
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
    this.startAutoSlide(); // reanuda autoslide
  }

  private handleSwipe() {
    const distance = this.touchEndX - this.touchStartX;

    // evita movimientos accidentales
    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      this.anterior();   // 👉 swipe derecha
    } else {
      this.siguiente();  // 👉 swipe izquierda
    }
  }

  // =====================
  // 👉 AUTOSLIDE
  // =====================

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.ngZone.run(() => {
        this.siguiente();
      });
    }, 10000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}




/*class PizzaMenu {
  pizzas = [
    {  nombre: 'Hawaina', 
      ingredientes: [
        'Queso',
        'Jamon',
        'Piña',
        'Salami'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    {  nombre: 'Peperoni', 
      ingredientes: [
        'Queso',
        'Jamon',
        'Peperoni'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    {  nombre: 'Ranchera', 
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo',
        'Jalapeño',
        'Cebolla'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 180 }
    ]},
    {  nombre: 'Mexicana', 
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo',
        'Tomate',
        'Jalapeño',
        'Cebolla'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 180 }
    ]},
    { nombre: 'Surtida', 
      ingredientes: [
        'Queso',
        'Jamon',
        'champiñon',
        'Salchicha',
        'Tocino',
        'chorizo',
        'pastor',
        'chile morron'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 95 },
      { nombre: 'Mediana', precio: 120 },
      { nombre: 'Grande', precio: 160 },
      { nombre: 'Familiar', precio: 195 }
    ]},
    { nombre: 'Carnívora', 
      ingredientes: [
        'Queso',
        'Jamon',
        'peperoni',
        'tocino',
        'salchicha',
        'Chistorra',
        'pastor'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 90 },
      { nombre: 'Mediana', precio: 120 },
      { nombre: 'Grande', precio: 160 },
      { nombre: 'Familiar', precio: 200 }
    ]},
    { nombre: 'Pastorera', 
      ingredientes: [
        'Queso',
        'Jamon',
        'pastor',
        'chile morron',
        'Cebolla'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 110 },
      { nombre: 'Mediana', precio: 125 },
      { nombre: 'Grande', precio: 170 },
      { nombre: 'Familiar', precio: 210 }
    ]},
    { nombre: 'Especial Dinos', 
      ingredientes: [
        'Queso',
        'Jamon',
        'champiñon',
        'tocino',
        'chorizo argentino',
        'pastor',
        'chile morron'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 100 },
      { nombre: 'Mediana', precio: 120 },
      { nombre: 'Grande', precio: 165 },
      { nombre: 'Familiar', precio: 200 }
    ]},

    { nombre: 'Chuleta', 
      ingredientes: [
        'Queso',
        'Jamon',
        'chuleta de cerdo',
        'cebolla',
        'chile morron'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 110 },
      { nombre: 'Mediana', precio: 125 },
      { nombre: 'Grande', precio: 165 },
      { nombre: 'Familiar', precio: 205 }
    ]},

    { nombre: 'Suprema Dinos', 
      ingredientes: [
        'doble Queso',
        'Jamon',
        'peperoni',
        'Champiñon',
        'tocino',
        'chorizo'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 110 },
      { nombre: 'Mediana', precio: 130 },
      { nombre: 'Grande', precio: 175 },
      { nombre: 'Familiar', precio: 205 }
    ]},
    { nombre: 'Pastorera Super Cargada', 
      ingredientes: [
        'Queso',
        'Jamon',
        'doble carne al pastor',
        'chile morron',
        'Cebolla'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 130 },
      { nombre: 'Mediana', precio: 180 },
      { nombre: 'Grande', precio: 195 },
      { nombre: 'Familiar', precio: 255 }
    ]},
    { nombre: 'Parrillera Dinos', 
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo argentino',
        'chuleta',
        'pastor',
        'morron',
        'Cebolla'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 130 },
      { nombre: 'Mediana', precio: 165 },
      { nombre: 'Grande', precio: 205 },
      { nombre: 'Familiar', precio: 265 }
    ]},
    { nombre: 'Predator', 
      ingredientes: [
        'Queso',
        'Jamon',
        'Pechuga de pollo',
        'Chuleta de cerdo',
        'bistec',
        'pastor',
        'Cebolla',
        'Morron'
      ],
      tamanos: [
      { nombre: 'Chica', precio: 140 },
      { nombre: 'Mediana', precio: 180 },
      { nombre: 'Grande', precio: 230 },
      { nombre: 'Familiar', precio: 290 }
    ]}
  ];
}*/

