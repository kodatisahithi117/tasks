import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponentComponent } from './active/active-component/active-component.component';
import { UsersServiceService } from './users-service.service';
import { FormsModule } from '@angular/forms';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ActiveModule,
    DeletedModule,
    ManageModule,
    SharedModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
