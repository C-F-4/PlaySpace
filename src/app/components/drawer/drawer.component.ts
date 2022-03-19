import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @Input() width: number = 400;
  @Input() position: 'left' | 'right' = 'right';
  @Output() onOpen = new EventEmitter();
  @Output() onClose = new EventEmitter();

  isDrawerOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleDrawer() {
    if (this.isDrawerOpen) {
      this.isDrawerOpen = false;
      this.onClose.emit();
    } else {
      this.isDrawerOpen = true;
      this.onOpen.emit();
    }
  }
}
