import { Routes } from '@angular/router';
import { PizzaModalComponent } from './pages/modal/pizza-modal.component';
import { AboutUsComponent } from './pages/aboutus/aboutus.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'modal',
        component: PizzaModalComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    },
    
];
