import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) { }
  slotCred={
    ownerId:this.serve.get_log_uId(),
    userType:this.serve.get_log_userType(),
   } 
   slotArr=[]
   gymData
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
       
     }
     console.log()
     this.get_members()
  }
  get_members()
  {
      ///console.log(this.slotCred)
      this.serve.get_list_of_members(this.slotCred)
      .subscribe((data)=>{
        console.log(data)
        
        if(JSON.parse(JSON.stringify(data)).Status=="Success")
        {
          this.gymData=data
          this.slotArr=this.gymData.users;
        }
        else
        {
          alert("something went wrong !try again")
        }
      })
  }
}
