import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

/**
 * Animación de deslizamiento para el modal de pizzas
 * :increment  -> cuando avanzas (derecha)
 * :decrement  -> cuando retrocedes (izquierda)
 */
export const slideAnimation = trigger('slideAnimation', [

  // 👉 Siguiente pizza (entra desde la derecha)
  transition(':increment', [
    style({
      transform: 'translateX(100%)',
      opacity: 0
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),

  // 👈 Pizza anterior (entra desde la izquierda)
  transition(':decrement', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])

]);
