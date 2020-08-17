import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
import { SloatCreationComponent } from '../sloat-creation/sloat-creation.component';

@Component({
  selector: 'app-list-sloats',
  templateUrl: './list-sloats.component.html',
  styleUrls: ['./list-sloats.component.css']
})
export class ListSloatsComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) { }

   slotCred={
    ownerId:"",
    userType:""
   }
   slotDeleteCre={
    ownerId:this.serve.get_log_uId(),
    userType:this.serve.get_log_userType(),
    slotId:" "
   }
    gymData
   slotArr=[]
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }
     this.get_slot_data()
  }
   
  get_slot_data()
  {
     this.slotCred.ownerId=this.serve.get_log_uId()
     this.slotCred.userType=this.serve.get_log_userType()
      
     this.serve.get_commen_gym_data(this.slotCred)
     .subscribe((data)=>{
       
       if(JSON.parse(JSON.stringify(data)).Status=="Success")
       {
         this.gymData=data
        //  console.log(this.gymData.Status)
         this.slotArr=this.gymData.result.slots
         console.log(this.slotArr)
       }
       else
       {
         alert("something went wrong ! try again")
       }
     })
  }
  onSubmit(slId)
  {
    console.log(slId)
    if (confirm("Do you want to delete this sloat")) {
           //continue with deletion process
            this.slotDeleteCre.slotId=slId

            this.serve.delete_slot(this.slotDeleteCre)
            .subscribe((data)=>{
               console.log(this.slotDeleteCre)
               console.log(data)
              if(JSON.parse(JSON.stringify(data)).Status=="Success")
              {
                alert("deleted successfully !!")
                this.ngOnInit()
              }
              else{
                alert("something went wrong try again")
              }
            })
    } 
    else {
        return;  
    }
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
