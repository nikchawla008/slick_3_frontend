import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LucknowAirportRoutingModule} from './lucknow-airport-routing.module';
import {SurveyComponent} from './survey/survey.component';

import {SharedModule} from "../shared/shared.module";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {CheckboxModule} from "primeng/checkbox";
import {InputMaskModule} from "primeng/inputmask";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {ChipsModule} from "primeng/chips";
import {CalendarModule} from "primeng/calendar";
import { Survey2Component } from './survey2/survey2.component';


@NgModule({
  declarations: [
    SurveyComponent,
    Survey2Component
  ],
	imports: [
		CommonModule,
		LucknowAirportRoutingModule,
		SharedModule,
		NzAutocompleteModule,
		NzCheckboxModule,
		CheckboxModule,
		InputMaskModule,
		InputTextModule,
		MultiSelectModule,
		DropdownModule,
		InputNumberModule,
		RadioButtonModule,
		ChipsModule,
		CalendarModule
	]
})
export class LucknowAirportModule { }
