import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  currentUser = '';

  userChanged: EventEmitter<string> = new EventEmitter();

  users=[
    {id:1,firstName:"One",lastname:"User",age:25,login:"User1",password:"p1",isDeleted:false},
    {id:2,firstName:"Two",lastname:"User",age:25,login:"User2",password:"p2",isDeleted:true},
    {id:3,firstName:"Three",lastname:"User",age:25,login:"User3",password:"p3",isDeleted:false},
    {id:4,firstName:"Four",lastname:"User",age:25,login:"User4",password:"p4",isDeleted:false},
    {id:5,firstName:"Five",lastname:"User",age:25,login:"User5",password:"p5",isDeleted:false},
    {id:6,firstName:"Six",lastname:"User",age:25,login:"User6",password:"p6",isDeleted:true},
    {id:7,firstName:"Seven",lastname:"User",age:25,login:"User7",password:"p7",isDeleted:true},
    {id:8,firstName:"Eight",lastname:"User",age:25,login:"User8",password:"p8",isDeleted:false},
    {id:9,firstName:"Nine",lastname:"User",age:25,login:"User9",password:"p9",isDeleted:true},
  ];
  constructor() { }

}
