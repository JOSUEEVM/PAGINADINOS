import { Routes } from '@angular/router';
import { PizzaModalComponent } from './pages/modal/pizza-modal.component';
import { AboutUsComponent } from './pages/aboutus/aboutus.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TerminosComponent } from './pages/conditions/terminos.component';
import { PrivacidadComponent } from './pages/privacy/privacidad.component';

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
    {
        path: 'conditions',
        component: TerminosComponent
    },
    {
        path: 'privacy',
        component: PrivacidadComponent
    },
    
];
