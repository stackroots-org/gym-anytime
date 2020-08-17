import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-sloat-creation',
  templateUrl: './sloat-creation.component.html',
  styleUrls: ['./sloat-creation.component.css']
})
export class SloatCreationComponent implements OnInit {
  time = {hour: 13, minute: 30};
  submitted = false;
  constructor(public serve:GetDataServiceService,public route:Router) { }
   slotCrd={
    ownerId:"",
    userType:"",
    fromTime:"",
    toTime:"",
    numberofToken:""
   }
   hour=[]
   min=["00","15","30","45"]
   count=["5","10","15","20","25"]
   counter:Number
   fromHour
   fromMinute
   fromReg
   toHour
   toMiute
   toReg
   fromTime
   toTime
   
  
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }

    this.time_creater()
  }

  
  onSubmit() {
      this.toHour=document.getElementById("ToHour").value;
      console.log(this.toHour)
       
   

   
    //  this.slotCrd.ownerId=this.serve.get_log_uId()
    //  this.slotCrd.userType=this.serve.get_log_userType()
   

    // this.serve.create_slot(this.slotCrd)
    // .subscribe((data)=>{
     
    //   if(JSON.parse(JSON.stringify(data)).Status=="Success")
    //           {
    //             alert("new slot successfully !!")
    //             this.route.navigate(["sloats"])
    //           }
    //           else{
    //             alert("something went wrong try again")
    //           }
    // })

}
time_creater()
 {
  for (let i =1; i <=12; i++) {
        if(i<10){this.hour.push("0"+i)}
        else{this.hour.push(i+"")}
  }
 }
 

}
