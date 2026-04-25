export class SnackMenu{
    snacks = [
        {
            nombre: 'Burrito',
            imagen: 'assets/snacks/burrito.png',
            tipos: [{nombre: 'burrito especial', precio: 70}],
        },
        {
            nombre: 'Hamburguesas',
            imagen: 'assets/snacks/hamburger.png',
            tipos: [
                {nombre: 'Hamburgesa sencilla', precio: 70},
                {nombre: 'Hamburguesa especial', precio: 85}
            ],
        },
        {
            nombre: 'Nachos',
            imagen: 'assets/snacks/nachos.png',
            tipos: [
                {nombre: 'Nachos al pastor', precio: 110},
                {nombre: 'Mega orden', precio: 170}
            ],
        },
    ];
    
    getSnacks(){
        return this.snacks;
    }
}