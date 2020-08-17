import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router,private datePipe: DatePipe) { }
      dt:any;
       slot=[]
       userObj
       slotObj
       time=[]
    bookCredentials={
      userType:"",
      date:"",
      ownerId:""
    }
    slotCred={
      ownerId:this.serve.get_log_uId(),
      userType:this.serve.get_log_userType(),
     } 
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }
     ///console.log(this.serve.time_converter("09:30:00"))
    this.get_user_data()
  }
  get_user_data()
  {
      
      ///console.log(this.datePipe.transform(Date.now(),'dd/MM/yyyy'))
       //this.dt=this.datePipe.transform(Date.now(),'dd/MM/yyyy')
      this.dt="10/08/2020"
      this.bookCredentials.ownerId=this.serve.get_log_uId()
      this.bookCredentials.userType=this.serve.get_log_userType()
      this.bookCredentials.date=this.dt
      //console.log(this.bookCredentials)

      this.serve.get_user_data(this.bookCredentials)
        .subscribe((data)=>{
          ///console.log(data)
           this.userObj=data
           this.slot=this.userObj.Users
           console.log(this.slot)
        })
  }
  convertTime(time)
  {
    if(time==undefined)
    {
      return ""
    }
   return this.serve.time_converter(time)
  }
  
}
