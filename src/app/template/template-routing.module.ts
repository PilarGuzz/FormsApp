

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DirectivesComponent } from './directives/directives.component';


const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: 'basicos', 
                component: BasicosComponent },
            { 
                path: 'dinamicos', 
                component: DinamicosComponent },
            {
              path: 'directives',
              component: DirectivesComponent},
            { 
                path: 'switches', 
                component: SwitchesComponent }
                
  
        ]
      },
  
  ];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class TemplateRoutingModule { }