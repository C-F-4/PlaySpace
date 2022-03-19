import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer-inner',
  templateUrl: './drawer-inner.component.html',
  styleUrls: ['./drawer-inner.component.scss'],
})
export class DrawerInnerComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() width: number = 400;
  @Input() position: 'left' | 'right' = 'right';
  @Output() onClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  close() {
    this.onClose.emit();
  }

  get drawerStyles() {
    const commonStyles = { width: `${this.width}px` };
    if (this.position === 'left') {
      return {
        ...commonStyles,
        left: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    } else {
      return {
        ...commonStyles,
        right: `${this.isOpen ? 0 : -1 * this.width}px`,
      };
    }
  }
}
