import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // @Input() status: string;

  @Output() userId = new EventEmitter<number>();
  users= [];

  constructor(private userService:UsersServiceService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  captureUserId(userId:number){
    this.userId.emit(userId);
  }

}
