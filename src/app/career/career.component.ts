import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
  
})
export class CareerComponent {
  isDropdownOpen: boolean[] = [false, false, false, false, false, false];
  flipped: boolean = false;

  toggleDropdown(index: number) {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
  }

  flip() {
    this.flipped = !this.flipped;
  }
}
