import { Routes } from '@angular/router';
import { PizzaMenu } from './services/pizzamenu.data';
import { MenuVisual } from './pages/menu/menu.component';
import { PizzaModalComponent } from './pages/modal/pizza-modal.component';
import { PromotionComponent } from './pages/promotion/promotiom.componet';
import { AboutUsComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pizzas',
        pathMatch: 'full'
    },
    {
        path: 'pizzas',
        component: MenuVisual
    },
    {
        path: 'modal',
        component: PizzaModalComponent
    },
    {
        path: 'promotion',
        component: PromotionComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    },
    
];
