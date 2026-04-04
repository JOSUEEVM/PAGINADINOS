export class SnackMenu{
    snacks = [
        {
            nombre: 'Burrito',
            imagen: 'assets/snacks/burrito.png',
            precio: 70
        },
        {
            nombre: 'Hamburguesa',
            imagen: 'assets/snacks/hamburger.png',
            precio: 100
        },
        {
            nombre: 'Nachos',
            imagen: 'assets/snacks/nachos.png',
            precio: 100
        },
    ];
    
    getSnacks(){
        return this.snacks;
    }
}