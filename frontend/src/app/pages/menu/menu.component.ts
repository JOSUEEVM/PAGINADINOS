import { Component } from "@angular/core";
import { NgFor } from '@angular/common';
import { PizzaMenu } from '../../services/pizzamenu.data';

@Component({
    selector: 'menu-pízza',
    standalone: true,
    imports: [NgFor],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuVisual {
    // Crea la instancia de PizzaMenu, igual que en el modal
    menu = new PizzaMenu();

    // Getter para acceder a las pizzas (opcional, pero lo hace más limpio si quieres)
    get pizz() {
        return this.menu.pizzas;
    }
}