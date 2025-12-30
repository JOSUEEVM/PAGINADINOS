import { Routes } from '@angular/router';
import { PizzaMenu } from './features/menu/menu.component';
import { PizzaModalComponent } from './features/modal/pizza-modal.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: PizzaMenu
    },
    {
        path: 'modal',
        component: PizzaModalComponent
    }
];
