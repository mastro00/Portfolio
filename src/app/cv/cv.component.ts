import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  downloadPlain() {
    const cvUrl = '/assets/Cv.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'il_mio_cv.pdf'; 
    link.target = '_blank';

    link.click();
  }

  downloadRegular() {
    const cvUrl = '/assets/Cv.pdf';

    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'il_mio_cv.pdf';
    link.target = '_blank';

    link.click();
  }

}
