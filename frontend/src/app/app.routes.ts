import { Routes } from '@angular/router';
import { PizzaMenu } from './features/menu.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: PizzaMenu
    }
];
