import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUsersComponentComponent } from './delete-users-component/delete-users-component.component';



@NgModule({
  declarations: [DeleteUsersComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DeleteUsersComponentComponent
  ]
})
export class DeletedModule { }
