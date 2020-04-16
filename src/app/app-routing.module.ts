import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveComponentComponent } from './active/active-component/active-component.component';
import { DeleteUsersComponentComponent } from './deleted/delete-users-component/delete-users-component.component';
import { ManageUsersComponentComponent } from './manage/manage-users-component/manage-users-component.component';
import { HomeComponent } from './home/home.component';
import { ManageModule } from './manage/manage.module';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'active',component:ActiveComponentComponent},
  {path:'deleted',component:DeleteUsersComponentComponent},
  {
    path:'manage',
    loadChildren: ()=> import('./manage/manage.module')
                        .then(file => file.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
