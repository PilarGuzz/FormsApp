import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule

  ]
})
export class TemplateModule { }
