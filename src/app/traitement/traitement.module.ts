import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraitementPageRoutingModule } from './traitement-routing.module';

import { TraitementPage } from './traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraitementPageRoutingModule
  ],
  declarations: [TraitementPage]
})
export class TraitementPageModule {}
