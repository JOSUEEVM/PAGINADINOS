import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PizzasComponent } from '../pizzas/pizzas.component';
import { PromotionsComponent } from "../promotion/promotion.component";
import { BannerSuperior } from "../../layout/banner/banner.component";
import { SnacksComponent } from "../snack/snacks.component";
import { ModalService } from "../../services/modal.service";
import { PizzaModalComponent } from "../../shared/modal/pizza-modal.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    PizzasComponent,
    PromotionsComponent,
    BannerSuperior,
    SnacksComponent,
    PizzaModalComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public modalService: ModalService) {}
}