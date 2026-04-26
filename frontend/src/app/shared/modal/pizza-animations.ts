import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [

  transition('* => *', [
    style({
      transform: '{{ enterFrom }}',
      opacity: 0
    }),
    animate('300ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ], {
    params: {
      enterFrom: 'translateX(100%)'
    }
  })

]);
