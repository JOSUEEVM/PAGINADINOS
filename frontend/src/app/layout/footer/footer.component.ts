import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  openMaps() 
  {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=Dinos+Pizzas',
      '_blank'
    );
  }
  openWhatsApp() 
  {
    const phone = '5219962002520';
    const message = encodeURIComponent('Hola 👋, quiero hacer un pedido en Dino’s Pizzas 🍕');

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }
}
