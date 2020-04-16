import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';

@Component({
  selector: 'app-active-component',
  templateUrl: './active-component.component.html',
  styleUrls: ['./active-component.component.css']
})
export class ActiveComponentComponent implements OnInit {
  status:string = "active";
  usersList:any;

  constructor(private userService: UsersServiceService) { }

  ngOnInit(){
    this.usersList = this.userService.users.filter((user)=>{
      return !user.isDeleted;
    });
    // this.usersList = this.userService.users;
  }

}
