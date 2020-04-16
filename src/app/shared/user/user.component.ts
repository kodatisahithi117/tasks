import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() status: string;
  @Input() user:any;
  @Output() userId = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  showDetails(userId:number){
    this.userId.emit(userId);
  }
  

}
