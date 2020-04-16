import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users-component',
  templateUrl: './manage-users-component.component.html',
  styleUrls: ['./manage-users-component.component.css']
})
export class ManageUsersComponentComponent implements OnInit {


  userList : any;

  // constructor(private userService: UsersServiceService) { }

  constructor(private router:Router){}

  ngOnInit(): void {
    // this.userList = this.userService.users;
  }

  showUserDetails(id:number){
    this.router.navigate(['manage',id]);
  }
}
