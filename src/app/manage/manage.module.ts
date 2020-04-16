import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponentComponent } from './manage-users-component/manage-users-component.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';

const manageRoutes : Routes = [
  {
    path : '',
    component : ManageUsersComponentComponent,

    children : [
      {
        path : ':id',
        component : UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ManageUsersComponentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports:[
    ManageUsersComponentComponent
  ]
})
export class ManageModule { }
