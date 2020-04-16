import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/users-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService:UsersServiceService, private router:ActivatedRoute) { }

  user:any;

  ngOnInit(): void {
    const userId = +this.router.snapshot.params['id'];
    this.user = this.userService.users.find((user)=> user.id===userId);

    this.router.params.subscribe(
      (param)=>{
        this.user = this.userService.users.find((user)=> user.id===+param['id']);
      }
    );

  }

}
