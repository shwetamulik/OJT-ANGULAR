import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  User:any = [];

  constructor(private apiService: ApiService) {
    this.readUser();
  }

  ngOnInit() {}

  readUser(){
    this.apiService.getUsers().subscribe((data) => {
     this.User = data;
    })
  }

  removeUser(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUser(employee.id).subscribe((data) => {
          this.User.splice(index, 1);
        }
      )
    }
  }

}
