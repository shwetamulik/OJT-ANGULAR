import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm,FormControl,ReactiveFormsModule } from "@angular/forms";
import {NewUserService} from '../../service/new-user.service';
import {User} from '../../model/User';
@Component({
  selector: 'app-user-create',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  user =new User();
  
  //message:Message;
  constructor(private _service : NewUserService,private _router : Router) {
   
    //this.AddUserform=this.Form();

  }
  error:any;
  msg='';
  msg1:any;
 
  addUser(){
    
    this._service.newUserRegFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        //this.msg="suc";
        this._router.navigate(['/list-sort']);
      },
      error =>{
        console.log(error.error);
        //this.msg=error.error;
        
        
       this.msg1=error.error;
       this.msg=this.msg1.message;
      //this.error=error;
       //this.msg1=this.msg;
       //this.msg=this.msg1.toString();
       //this.msg=("Exception occured")
       //this.msg="Enter all the Fields which is required";
      }
    ) 
    
  }
  ngOnInit(): void {
  }


}
