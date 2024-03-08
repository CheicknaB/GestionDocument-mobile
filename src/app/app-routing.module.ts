import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  }
  // { path: 'tabs', component: TabsPage },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
