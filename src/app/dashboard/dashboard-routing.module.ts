import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiveDashboardComponent} from "./live-dashboard/live-dashboard.component";

const routes: Routes = [
  {
    path: 'live',
    component: LiveDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
