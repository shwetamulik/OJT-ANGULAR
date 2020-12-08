import { User } from '../../model/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PasswordStrengthValidator } from './validatord';


@Component({
  selector: 'app-user-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  userData: User[];
 UserProfile:any = ['System Admin', 'User', 'Tenant Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      userName: [{value:'',disabled:true},[Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, PasswordStrengthValidator]],
     // password: ['',  [Validators.required,Validators.pattern('^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$'),Validators.minLength(6)]],
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
     // password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('role').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getUser(id).subscribe(data => {
      this.editForm.setValue({
        userName: data['userName'],
        firstName: data['firstName'],
        lastName: data['lastName'],
        phoneNumber: data['phoneNumber'],
        password:data['password'],
        role:data['role'],
        emailId:data['emailId']
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      userName: ['',[Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
     // password: ['', [Validators.required]],
     password: ['',  [Validators.required,Validators.pattern('^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$'),Validators.minLength(8),Validators.maxLength(30)]],
      emailId: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    //  designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10),Validators.maxLength(10)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateUser(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-users');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
