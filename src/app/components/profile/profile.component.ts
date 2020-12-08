import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import { ProfileserviceService } from '../../service/profileservice.service';
import { UnsubServiceService } from '../../service/unsub-service.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  profile:User[];

  constructor(private service:ProfileserviceService,private router:Router,private service1:UnsubServiceService) { }

  ngOnInit() 
  {
    this.service.viewProfile().subscribe(
      data=>{
        this.profile=data;
      },
      error=>console.log("Error")
      
      
    )
  }
  Home(){
    this.router.navigate(['welcome'])
  }

  unsubscribe()
  {
    if(window.confirm('Are you sure?'))
    {
    this.router.navigate(['login-form'])
    this.service1.unsub().subscribe(
      data=>{
        this.profile=data;
      },
      error=>console.log("Error")
    )
    window.alert("unsubscribed successfully!")
    }
    
  }

}
