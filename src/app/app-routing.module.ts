import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {path: 'tabs',
    children: [
      {
        path: '',
        loadChildren:
          './tab2/tab2.module#Tab2PageModule'
      },
      {
        path: ':id',
        loadChildren: './tab3/tab3.module#Tab3PageModule'
      },
     
    ]},
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
   
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
