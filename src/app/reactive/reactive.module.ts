import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { ReactiveRoutingModule } from './reactive-routing.module';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
