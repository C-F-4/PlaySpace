import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  isDrawerOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  close() {
    this.isDrawerOpen = false;
    this.onClose.emit();
  }

  toggleDrawer() {
    if (this.isDrawerOpen) {
      this.close();
    } else {
      this.isDrawerOpen = true;
    }
  }
}
