import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from "./survey/survey.component";
import {Survey2Component} from './survey2/survey2.component';

const routes: Routes = [
  {
    path: 's1',
    component: SurveyComponent
  },
  {
    path: 's2',
    component: Survey2Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 's1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LucknowAirportRoutingModule { }
