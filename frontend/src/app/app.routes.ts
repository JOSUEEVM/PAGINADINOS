import { Routes } from '@angular/router';
import { PizzaMenu } from './services/pizzamenu.data';
import { MenuVisual } from './pages/menu/menu.component';
import { PizzaModalComponent } from './pages/modal/pizza-modal.component';
import { PromotionComponent } from './pages/promotion/promotiom.componet';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuVisual
    },
    {
        path: 'modal',
        component: PizzaModalComponent
    },
    {
        path: 'promotion',
        component: PromotionComponent
    }
];
