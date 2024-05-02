import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CvComponent } from '../cv/cv.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
constructor (private matDialog: MatDialog){}
  redirectContacts(link: string) {
    window.open(link);
  }

  openDialog() {
    this.matDialog.open(CvComponent);
  }
}
