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
  pizzas = [
    {
      nombre: 'Ranchera',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Surtida',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Carnívora',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Pastorera',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Especial Dinos',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Chuleta',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Suprema Dinos',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Pastorera Super Cargada Ranchera',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Parrillera Dinos Ranchera',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Predator',
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    }
  ];
}
