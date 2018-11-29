import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
        path: 'addEvent/:date',
        loadChildren:'../add-event/add-event.module#AddEventPageModule'
      },
      {
        path: 'addEvent',
        loadChildren:'../add-event/add-event.module#AddEventPageModule'
      }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
