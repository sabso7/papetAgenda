import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {CalendrierComponent } from '../calendrier/calendrier.component';
import { ModalDetailsPage } from '../modal-details/modal-details.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, CalendrierComponent, ModalDetailsPage],
  entryComponents: [ModalDetailsPage]
})
export class HomePageModule {}
