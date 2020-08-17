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
   
   personNumber
   fromHour
   fromMinute
   fromReg
   toHour
   toMinute
   toReg
   fromTime
   toTime
   tmpVal
   personErr=false
   toErr=false
   fromErr=false
   key1
   key2
   key3
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }

    this.time_creater()
  }

  
  onSubmit() { 

     /// console.log("working")
      this.tmpVal=document.getElementById("perPersons")
      this.personNumber=this.tmpVal.value

      this.tmpVal=document.getElementById("ToHour")
      this.toHour=this.tmpVal.value
      
      this.tmpVal=document.getElementById("ToMinute")
      this.toMinute=this.tmpVal.value

      this.tmpVal=document.getElementById("ToTimeReg")
      this.toReg=this.tmpVal.value
           
      ///console.log(this.personNumber+" "+this.toHour+" "+this.toMinute+" "+this.toReg)
      
      this.tmpVal=document.getElementById("FromHour")
      this.fromHour=this.tmpVal.value
      
      this.tmpVal=document.getElementById("FromMinute")
      this.fromMinute=this.tmpVal.value

      this.tmpVal=document.getElementById("FromTimeReg")
      this.fromReg=this.tmpVal.value
     
      ///console.log(this.fromHour+" "+this.fromMinute+" "+this.fromReg)
     

      if(this.personNumber=="select")
      {
          this.personErr=true
          this.key1=false
      }
      else
      {
        this.personErr=false
        this.key1=true
      }

      if(this.toHour=="hour"|| this.toMinute=="minute")
      {
        this.toErr=true
        this.key2=false
      }
      else
      {
        this.toErr=false
        this.key2=true
      }

      if(this.fromHour=="hour"|| this.fromMinute=="minute")
      {
        this.fromErr=true
        this.key3=false
      }
      else
      {
        this.fromErr=false
        this.key3=true
      }
       
      if(this.key1==true && this.key2==true && this.key3==true)
      {
        this.toTime=this.toHour+":"+this.toMinute+":"+this.toReg
        this.fromTime=this.fromHour+":"+this.fromMinute+":"+this.fromReg
        this.create_slot(this.toTime,this.fromTime,this.personNumber)
      }
      

}
time_creater()
 {
  for (let i =1; i <=12; i++) {
        if(i<10){this.hour.push("0"+i)}
        else{this.hour.push(i+"")}
  }
 }
 create_slot(from,to,no)
 {    
     console.log(from+","+to)
    this.slotCrd.ownerId=this.serve.get_log_uId()
    this.slotCrd.userType=this.serve.get_log_userType()
    this.slotCrd.fromTime=from
    this.slotCrd.toTime=to
    this.slotCrd.numberofToken=no

    
    this.serve.create_slot(this.slotCrd)
   .subscribe((data)=>{
    if(JSON.parse(JSON.stringify(data)).Status=="Success")
            {
              alert("new slot successfully !!")
              this.route.navigate(["sloats"])
            }
            else{
              alert("something went wrong try again")
            }
  })
 }

}
