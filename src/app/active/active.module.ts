import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponentComponent } from './active-component/active-component.component';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ActiveComponentComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ActiveComponentComponent
  ]
})
export class ActiveModule { }
