import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerInnerComponent } from './drawer/drawer-inner/drawer-inner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DrawerComponent, DrawerInnerComponent],
  exports: [DrawerComponent],
})
export class ComponentsModule {}
