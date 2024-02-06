import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraitementPage } from './traitement.page';

const routes: Routes = [
  {
    path: '',
    component: TraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitementPageRoutingModule {}
