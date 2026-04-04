import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { SnackMenu } from '../../services/snacks.services';

@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './snacks.component.html',
  styleUrl: './snacks.component.css'
})
export class SnacksComponent {
  menu = new SnackMenu();

  get snacks() {
    return this.menu.getSnacks();
  }
}