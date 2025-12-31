import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideAnimation } from './pizza-animations';

@Component({
  selector: 'app-pizza-modal',
  standalone: true,
  imports: [CommonModule],
  animations: [slideAnimation],
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css']
})
export class PizzaModalComponent {

  menu = new PizzaMenu();
  currentIndex = 0;

  direction: 'left' | 'right' = 'right';
  animationKey = 0;

  get pizzaActual() {
    return this.menu.pizzas[this.currentIndex];
  }

  siguiente() {
    this.direction = 'left';
    this.animationKey++;

    this.currentIndex =
      (this.currentIndex + 1) % this.menu.pizzas.length;
  }

  anterior() {
    this.direction = 'right';
    this.animationKey++;

    this.currentIndex =
      (this.currentIndex - 1 + this.menu.pizzas.length) % this.menu.pizzas.length;
  }
}



class PizzaMenu {
  pizzas = [
    { nombre: 'Ranchera', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Surtida', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Carnívora', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Pastorera', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Especial Dinos', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Chuleta', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Suprema Dinos', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Pastorera Super Cargada Ranchera', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Parrillera Dinos Ranchera', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]},
    { nombre: 'Predator', tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]}
  ];
}

