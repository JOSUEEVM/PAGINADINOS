import { Component, HostListener } from "@angular/core";
import { NgFor, CommonModule } from '@angular/common';
import { PizzaMenu } from '../../services/pizzamenu.data';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  menu = new PizzaMenu();
  openedIngredientsIndex: number | null = null;

  constructor(public modalService: ModalService) {}

  get pizz() {
    return this.menu.pizzas;
  }

  openModal(pizza: any) {
    this.modalService.openModal(pizza);
  }

  toggleIngredients(index: number, event: Event) {
    event.stopPropagation();

    if (this.openedIngredientsIndex === index) {
      this.openedIngredientsIndex = null;
    } else {
      this.openedIngredientsIndex = index;
    }
  }

  closeIngredients() {
    this.openedIngredientsIndex = null;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeIngredients();
  }
}