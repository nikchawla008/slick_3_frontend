import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NzInputModule} from "ng-zorro-antd/input";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzMessageModule} from 'ng-zorro-antd/message';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzInputModule,
    NgbModule,
    NzRadioModule,
    NzButtonModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzModalModule,
    NgOptimizedImage,
    NzMessageModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzInputModule,
    NgbModule,
    NzRadioModule,
    NzButtonModule,
    NzSelectModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzModalModule,
    NgOptimizedImage,
    NzMessageModule,
  ]
})
export class SharedModule { }
