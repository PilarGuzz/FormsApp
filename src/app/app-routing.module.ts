import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
 
  { path: '',
    redirectTo:'template',
    pathMatch: 'full'
    
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  { path: '**',
  component:NotFoundComponent
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
