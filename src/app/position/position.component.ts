import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent implements OnInit{
constructor(private router: Router){}

icon = ''
path = ''
name = ''

getIcon(): string {
  this.path = this.router.url;
  switch (this.path) {
    case '/home':
      return this.icon = 'fa-solid fa-house'
    case '/about':
      return this.icon = 'fas fa-info-circle'
    case '/career':
      return this.icon = 'fas fa-briefcase'
    case '/contacts':
      return this.icon = 'fas fa-address-book'
      default:
        return this.name = ''
  }
}

getName(): string {
  this.path = this.router.url;
  switch (this.path) {
    case '/home':
      return this.name = 'Home'
    case '/about':
      return this.name = 'About'
    case '/career':
      return this.name = 'Career'
    case '/contacts':
      return this.name = 'Contacts'
    default:
      return this.name = ''
  }
}

ngOnInit() {
  this.getIcon();
  this.getName();
}

}