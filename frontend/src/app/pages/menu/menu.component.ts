import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PizzasComponent } from '../pizzas/pizzas.component';
import { PromotionsComponent } from "../promotion/promotion.component";
import { BannerSuperior } from "../../layout/banner/banner.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    PizzasComponent,
    PromotionsComponent,
    BannerSuperior,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {}