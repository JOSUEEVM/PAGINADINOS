import { Component } from "@angular/core";
import { NgFor } from '@angular/common';

@Component({
    selector: 'menu-pízza',
    standalone: true,
    imports: [NgFor],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class PizzaMenu {
  pizza = {
    nombre: 'Hawaiana',
    tamanos: [
      { nombre: 'Chica', precio: 75 },
      { nombre: 'Mediana', precio: 100 },
      { nombre: 'Grande', precio: 130 },
      { nombre: 'Familiar', precio: 185 }
    ]
  };
}