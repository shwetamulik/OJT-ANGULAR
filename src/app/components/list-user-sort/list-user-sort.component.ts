import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../../service/list-user.service';
import { User } from '../../model/User';
@Component({
  selector: 'app-list',
  templateUrl: './list-user-sort.component.html',
  styleUrls: ['./list-user-sort.component.css']
})
export class ListUserSortComponent implements OnInit {

  userslist:User[];
  user:User[]=[];
  totalRecords:number;
  page:Number=1;
 num:number;
  constructor(private service:ListUserService) { }

  ngOnInit(){
    this.service.fetchUsersList().subscribe(
      data=>{
        console.log("Received");
        this.userslist=data;
        this.totalRecords=this.userslist.length;
        },
        error=>console.log("Error")
    )
    
  }

}