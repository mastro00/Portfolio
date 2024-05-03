import { Component } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
constructor (){}
  redirectContacts(link: string) {
    window.open(link);
  }

  download() {
    const cvUrl = '/assets/Mastrangelo Giovanni Cv.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mastrangelo Giovanni Cv.pdf';
    link.target = '_blank';

    link.click();
  }

}
