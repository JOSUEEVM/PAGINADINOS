import { Component } from "@angular/core";
import { NgFor, CommonModule } from '@angular/common';
import { PizzaMenu } from '../../services/pizzamenu.data';
import { ModalService } from '../../services/modal.service';
import { PizzaModalComponent } from "../modal/pizza-modal.component";  // Ajusta la ruta si es necesario

@Component({
    selector: 'menu-pízza',
    standalone: true,
    imports: [NgFor, CommonModule, PizzaModalComponent],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuVisual {
    menu = new PizzaMenu();

    constructor(public modalService: ModalService) {}  // Cambia 'private' a 'public'

    get pizz() {
        return this.menu.pizzas;
    }

    openModal(pizza: any) {
        this.modalService.openModal(pizza);
    }
}