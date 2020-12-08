import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm,FormControl,ReactiveFormsModule } from "@angular/forms";
import {NewUserService} from '../../service/new-user.service';
import {User} from '../../model/User';
import { LoginServiceService } from '../../service/login-service.service';
import { Routes, RouterModule, Router } from '@angular/router';
 
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form : FormGroup;
  user  = new User();
  msg = '';
   constructor( private router:Router , private _service : LoginServiceService ) { }



  ngOnInit() {
  }

  
 onSubmit()
 {
  // document.write("hii");
  this.router.navigate(['create-user']);
 }  
  
 loginUser()
 {
   this._service.loginUserFromRemote(this.user).subscribe(
     data => {console.log("Response Recived")
    this.router.navigate(['create-user']);
    },
  error => {
    console.error("Exception Occured ");
    alert("Sorry your Username or Password is Incorrect Else you have Unsubscribed!!! ");
    this.msg = "Sorry your Username or Password is Incorrect Else you have Unsubscribed!!! ";

}

);
}
}