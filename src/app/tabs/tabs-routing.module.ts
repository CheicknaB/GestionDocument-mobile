import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [


  {
    path: 'tabs',
    component: TabsPage,
    children: [
     
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'utilisateurs',
        loadChildren: () => import('../utilisateurs/utilisateurs.module').then(m => m.UtilisateursPageModule)
      },
      {
        path: 'traitement',
        loadChildren: () => import('../traitement/traitement.module').then(m => m.TraitementPageModule)
      },
      // {
      //   path: 'acceuil',
      //   loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      // },
      // {
      //   path: '',
      //   redirectTo: '/traitement',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/traitement', // Rediriger vers la page de traitement par défaut
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
