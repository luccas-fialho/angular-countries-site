import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
