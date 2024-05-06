import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {LiveDashboardComponent} from './live-dashboard/live-dashboard.component';
import {ChartModule} from "primeng/chart";
import {DropdownModule} from "primeng/dropdown";
import {SharedModule} from "../shared/shared.module";
import {CardModule} from "primeng/card";
import {ClientDashboardComponent} from './client-dashboard/client-dashboard.component';


@NgModule({
  declarations: [
    LiveDashboardComponent,
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ChartModule,
    DropdownModule,
    CardModule,
  ]
})
export class DashboardModule { }
