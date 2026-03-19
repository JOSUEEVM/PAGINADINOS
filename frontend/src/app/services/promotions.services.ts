
export interface Promotion {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export class PromotionsData {
  promotions: Promotion[] = [
    {
      id: 1,
      titulo: 'Promo Familiar',
      descripcion: 'Pizza familiar con precio especial.',
      imagen: 'assets/promotions/paquete1.png'
    },
    {
      id: 2,
      titulo: '2x1 Martes',
      descripcion: 'Llévate dos pizzas al precio de una.',
      imagen: 'assets/promotions/paquete2.png'
    },
    {
      id: 3,
      titulo: 'Combo Dinos',
      descripcion: 'Pizza + refresco + papas a precio especial.',
      imagen: 'assets/promotions/paquete3.png'
    }
  ];

  getPromotions() {
    return this.promotions;
  }
}