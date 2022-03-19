import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerInnerComponent } from './drawer/drawer-inner/drawer-inner.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DrawerComponent, DrawerInnerComponent, ButtonComponent],
  exports: [DrawerComponent],
})
export class ComponentsModule {}
