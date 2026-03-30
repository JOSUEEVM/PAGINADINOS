import { Injectable } from '@angular/core';

export interface LocalImage {
  id: number;
  nombre: string;
  ruta: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalImagesService {
  private images: LocalImage[] = [
    {
      id: 1,
      nombre: 'Local 1',
      ruta: 'assets/local/local.jpg'
    },
    {
      id: 2,
      nombre: 'Local 2',
      ruta: 'assets/local/local2.jpg'
    },
    {
      id: 3,
      nombre: 'Local 3',
      ruta: 'assets/local/local3.jpg'
    },
    {
      id: 4,
      nombre: 'Local 4',
      ruta: 'assets/local/local4.jpg'
    },{
      id: 5,
      nombre: 'Local 5',
      ruta: 'assets/local/local5.jpg'
    }
  ];

  getImages(): LocalImage[] {
    return this.images;
  }
}