export class PizzaMenu {
  pizzas = [
    {
      nombre: 'Hawaina',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🍍 Piña',
        '🍖 Salami'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Peperoni',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🌶️ Peperoni'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 185 }
      ]
    },
    {
      nombre: 'Ranchera',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🌭 chorizo',
        '🌶️ Jalapeño',
        '🧅 Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 180 }
      ]
    },
    {
      nombre: 'Mexicana',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🌭 chorizo',
        '🍅 Tomate',
        '🌶️ Jalapeño',
        '🧅 Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 75 },
        { nombre: 'Mediana', precio: 100 },
        { nombre: 'Grande', precio: 130 },
        { nombre: 'Familiar', precio: 180 }
      ]
    },
    {
      nombre: 'Surtida',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🍄 champiñon',
        '🌭 Salchicha',
        '🥓 Tocino',
        '🌭 chorizo',
        '🥩 pastor',
        '🫑 chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 95 },
        { nombre: 'Mediana', precio: 120 },
        { nombre: 'Grande', precio: 160 },
        { nombre: 'Familiar', precio: 195 }
      ]
    },
    {
      nombre: 'Carnívora',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🌶️ peperoni',
        '🥓 tocino',
        '🌭 salchicha',
        '🌭 Chistorra',
        '🥩 pastor'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 90 },
        { nombre: 'Mediana', precio: 120 },
        { nombre: 'Grande', precio: 160 },
        { nombre: 'Familiar', precio: 200 }
      ]
    },
    {
      nombre: 'Pastorera',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🥩 pastor',
        '🫑 chile morron',
        '🧅 Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 110 },
        { nombre: 'Mediana', precio: 125 },
        { nombre: 'Grande', precio: 170 },
        { nombre: 'Familiar', precio: 210 }
      ]
    },
    {
      nombre: 'Especial Dinos',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🍄 champiñon',
        '🥓 tocino',
        '🌭 chorizo argentino',
        '🥩 pastor',
        '🫑 chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 100 },
        { nombre: 'Mediana', precio: 120 },
        { nombre: 'Grande', precio: 165 },
        { nombre: 'Familiar', precio: 200 }
      ]
    },
    {
      nombre: 'Chuleta',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🥩 chuleta de cerdo',
        '🧅 cebolla',
        '🫑 chile morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 110 },
        { nombre: 'Mediana', precio: 125 },
        { nombre: 'Grande', precio: 165 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Suprema Dinos',
      ingredientes: [
        '🧀🧀 doble Queso',
        '🍖 Jamon',
        '🌶️ peperoni',
        '🍄 Champiñon',
        '🥓 tocino',
        '🌭 chorizo'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 110 },
        { nombre: 'Mediana', precio: 130 },
        { nombre: 'Grande', precio: 175 },
        { nombre: 'Familiar', precio: 205 }
      ]
    },
    {
      nombre: 'Pastorera Super Cargada',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🥩🥩 doble carne al pastor',
        '🫑 chile morron',
        '🧅 Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 130 },
        { nombre: 'Mediana', precio: 180 },
        { nombre: 'Grande', precio: 195 },
        { nombre: 'Familiar', precio: 255 }
      ]
    },
    {
      nombre: 'Parrillera Dinos',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🌭 chorizo argentino',
        '🥩 chuleta',
        '🥩 pastor',
        '🫑 morron',
        '🧅 Cebolla'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 130 },
        { nombre: 'Mediana', precio: 165 },
        { nombre: 'Grande', precio: 205 },
        { nombre: 'Familiar', precio: 265 }
      ]
    },
    {
      nombre: 'Predator',
      ingredientes: [
        '🧀 Queso',
        '🍖 Jamon',
        '🍗 Pechuga de pollo',
        '🥩 Chuleta de cerdo',
        '🥩 bistec',
        '🥩 pastor',
        '🧅 Cebolla',
        '🫑 Morron'
      ],
      tamanos: [
        { nombre: 'Chica', precio: 140 },
        { nombre: 'Mediana', precio: 180 },
        { nombre: 'Grande', precio: 230 },
        { nombre: 'Familiar', precio: 290 }
      ]
    }
  ];

  getPizzas() {
    return this.pizzas;
  }
}