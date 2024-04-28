import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  count = 0;
  show = false;
  showTooltip = false;

  showButton(){
    this.show = !this.show
  }


}
