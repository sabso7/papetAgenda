import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
import { AddEventPage } from '../add-event/add-event.page';
import { AddEventPageModule } from '../add-event/add-event.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    AddEventPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
