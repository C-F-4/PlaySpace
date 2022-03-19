import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  close() {
    this.onClose.emit();
  }
}
