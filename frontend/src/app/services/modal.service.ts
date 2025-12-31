// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // O agrégalo a providers en tu módulo/app
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private selectedPizzaSubject = new BehaviorSubject<any>(null);

  isOpen$ = this.isOpenSubject.asObservable();
  selectedPizza$ = this.selectedPizzaSubject.asObservable();

  get isOpen(): boolean {
    return this.isOpenSubject.value;
  }

  openModal(pizza: any) {
    this.selectedPizzaSubject.next(pizza);
    this.isOpenSubject.next(true);
  }

  closeModal() {
    this.isOpenSubject.next(false);
    this.selectedPizzaSubject.next(null);
  }
}