import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';


@Component({
  selector: 'app-delete-users-component',
  templateUrl: './delete-users-component.component.html',
  styleUrls: ['./delete-users-component.component.css']
})
export class DeleteUsersComponentComponent implements OnInit {
  
  usersList = [];
  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
    this.usersList = this.userService.users.filter((user)=>{
      return user.isDeleted;
    });
  }

}
