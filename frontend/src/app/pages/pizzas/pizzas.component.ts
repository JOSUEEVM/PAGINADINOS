import { Component } from "@angular/core";
import { NgFor, CommonModule } from '@angular/common';
import { PizzaMenu } from '../../services/pizzamenu.data';
import { ModalService } from '../../services/modal.service';
import { PizzaModalComponent } from "../modal/pizza-modal.component";

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [NgFor, CommonModule, PizzaModalComponent],
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  menu = new PizzaMenu();

  constructor(public modalService: ModalService) {}

  get pizz() {
    return this.menu.pizzas;
  }

  openModal(pizza: any) {
    this.modalService.openModal(pizza);
  }
}