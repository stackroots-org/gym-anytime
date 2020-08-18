import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-already-booked',
  templateUrl: './already-booked.component.html',
  styleUrls: ['./already-booked.component.css']
})
export class AlreadyBookedComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) { }
  slotCred={
    ownerId:this.serve.get_log_owner_id(),
    userType:"user",
    userId:this.serve.get_log_uId()
   } 
   useData
   date
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
    {this.route.navigate([""])}
    this.get_date
  }
   
   get_date()
   {
    this.serve.get_list_of_members(this.slotCred)
    .subscribe((data)=>{
       ///console.log(data)
       this.useData=data
       if(JSON.parse(JSON.stringify(data)).Status=="Success")
        {
          
           this.date=this.useData.slotBookedDate
        }
        else
        {console.log("not found")}
         
        
    })
   }
}
