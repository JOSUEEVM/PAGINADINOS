export class PizzaMenu {
  pizzas = [
    {
      nombre: 'Hawaiana',
      imagen: 'assets/pizzas/hawaiana.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'Piña',
        'Salami'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 90 },
        { nombre: 'Mediana', precio: 130 },
        { nombre: 'Grande', precio: 150 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Peperoni',
      imagen: 'assets/pizzas/peperoni.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'Peperoni'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 90 },
        { nombre: 'Mediana', precio: 130 },
        { nombre: 'Grande', precio: 150 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Ranchera',
      imagen: 'assets/pizzas/ranchera.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo',
        'Jalapeño',
        'Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 90 },
        { nombre: 'Mediana', precio: 130 },
        { nombre: 'Grande', precio: 150 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Mexicana',
      imagen: 'assets/pizzas/mexicana.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo',
        'Tomate',
        'Jalapeño',
        'Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 90 },
        { nombre: 'Mediana', precio: 130 },
        { nombre: 'Grande', precio: 150 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Surtida',
      imagen: 'assets/pizzas/surtida.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'champiñon',
        'Salchicha',
        'Tocino',
        'chorizo',
        'pastor',
        'chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 115 },
        { nombre: 'Mediana', precio: 140 },
        { nombre: 'Grande', precio: 185 },
        { nombre: 'Familiar', precio: 230 }
      ]
    },
    {
      nombre: 'Carnívora',
      imagen: 'assets/pizzas/carnivora.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'peperoni',
        'tocino',
        'salchicha',
        'Chistorra',
        'pastor'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 125 },
        { nombre: 'Mediana', precio: 155 },
        { nombre: 'Grande', precio: 190 },
        { nombre: 'Familiar', precio: 235 }
      ]
    },
    {
      nombre: 'Pastorera',
      imagen: 'assets/pizzas/pastor.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'pastor',
        'chile morron',
        'Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 125 },
        { nombre: 'Mediana', precio: 145 },
        { nombre: 'Grande', precio: 190 },
        { nombre: 'Familiar', precio: 235 }
      ]
    },
    {
      nombre: 'Especial Dinos',
      imagen: 'assets/pizzas/especial.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'champiñon',
        'tocino',
        'chorizo argentino',
        'pastor',
        'chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 125 },
        { nombre: 'Mediana', precio: 155 },
        { nombre: 'Grande', precio: 190 },
        { nombre: 'Familiar', precio: 235 }
      ]
    },
    {
      nombre: 'Chuleta',
      imagen: 'assets/pizzas/chuleta.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'chuleta de cerdo',
        'cebolla',
        'chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 130 },
        { nombre: 'Mediana', precio: 155 },
        { nombre: 'Grande', precio: 190 },
        { nombre: 'Familiar', precio: 240 }
      ]
    },
    {
      nombre: 'Suprema Dinos',
      imagen: 'assets/pizzas/suprema.png',
      ingredientes: [
        'doble Queso',
        'Jamon',
        'peperoni',
        'Champiñon',
        'tocino',
        'chorizo'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 130 },
        { nombre: 'Mediana', precio: 160 },
        { nombre: 'Grande', precio: 200 },
        { nombre: 'Familiar', precio: 250 }
      ]
    },
    {
      nombre: 'Pastorera Super Cargada',
      imagen: 'assets/pizzas/supercargada.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'doble carne al pastor',
        'chile morron',
        'Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 145 },
        { nombre: 'Mediana', precio: 185 },
        { nombre: 'Grande', precio: 210 },
        { nombre: 'Familiar', precio: 260 }
      ]
    },
    {
      nombre: 'Parrillera Dinos',
      imagen: 'assets/pizzas/parrillera.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'chorizo argentino',
        'chuleta',
        'pastor',
        'morron',
        'Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 145 },
        { nombre: 'Mediana', precio: 180 },
        { nombre: 'Grande', precio: 225 },
        { nombre: 'Familiar', precio: 295 }
      ]
    },
    {
      nombre: 'Predator',
      imagen: 'assets/pizzas/predator.png',
      ingredientes: [
        'Queso',
        'Jamon',
        'Pechuga de pollo',
        'Chuleta de cerdo',
        'bistec',
        'pastor',
        'Cebolla',
        'Morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 150 },
        { nombre: 'Mediana', precio: 190 },
        { nombre: 'Grande', precio: 250 },
        { nombre: 'Familiar', precio: 310 }
      ]
    }
  ];

  getPizzas() {
    return this.pizzas;
  }
}