import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-sloat',
  templateUrl: './book-sloat.component.html',
  styleUrls: ['./book-sloat.component.css']
})
export class BookSloatComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) { }
  slotCred={
    ownerId:this.serve.get_log_owner_id(),
    userType:"gym",
   } 
   bookCre={
    userId:this.serve.get_log_uId(),
    userType:this.serve.get_log_userType(),
    ownerId:this.serve.get_log_owner_id(),
    slotId:"",
    date:"10/08/2020"
   }
   slotArr=[]
   gymData
   useData
   useArr=[]
   userId=this.serve.get_log_uId()
   hasError=true
   dateToday:any=new Date()
   //"2020-10-08T00:00:00.000Z"
   dt
  ngOnInit(): void {
     if(!this.serve.get_log_satus())
     {this.route.navigate([""])}
     ///this.get_slots()
      this.book_status()
     ///this.dateToday=new Date()
     console.log(this.dateToday)
  }
   book_status()
   {
     //console.log(this.slotCred)
      this.serve.get_list_of_members(this.slotCred)
      .subscribe((data)=>{
         ///console.log(data)
         if(JSON.parse(JSON.stringify(data)).Status=="Success")
          {
            this.useData=data
            this.useArr=this.useData.users
           // console.log(this.useArr)
            for (this.dt of this.useArr) 
            {
                //console.log(this.dt._id)   
                if(this.dt._id==this.userId)
                {
                  console.log(this.dt.slotBookedDate)
                  if(this.dt.slotBookedDate==this.dateToday)
                  {
                    this.route.navigate(['already-booked'])
                  }
                  else
                  {
                    this.get_slots()
                  }

                }
            }
            
          }
          else
          {console.log("error found")}
           
          
      })
   }
  get_slots()
  {
    ///console.log(this.slotCred)
    this.serve.get_commen_gym_data(this.slotCred)
    .subscribe((data)=>{
       ////console.log(data)
       if(JSON.parse(JSON.stringify(data)).Status=="Success")
       {
         this.gymData=data
         ///console.log(this.gymData.Status)
         this.slotArr=this.gymData.result.slots
         //console.log(this.slotArr)
       }
       else
       {
         alert("something went wrong !!")
       }
    })
    
  }
  onSubmit(id)
  {
    
    this.bookCre.slotId=id
    ///console.log(this.serve.get_log_uId())
    this.serve.book_slot(this.bookCre)
     .subscribe((data)=>{
           console.log(data)
           if(JSON.parse(JSON.stringify(data)).Status=="Success")
           {
             alert("successfully booked !!")
           }
           else
           {
             alert("something went wrong !! try again")
           }
      })


  }
}
