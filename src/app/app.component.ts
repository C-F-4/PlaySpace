import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  open() {
    console.log('Drawer opened');
  }

  close() {
    console.log('Drawer closed');
  }
}
