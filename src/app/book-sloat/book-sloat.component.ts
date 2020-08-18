import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-sloat',
  templateUrl: './book-sloat.component.html',
  styleUrls: ['./book-sloat.component.css']
})
export class BookSloatComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) {
   }
  slotCred={
    ownerId:this.serve.get_log_owner_id(),
    userType:"gym",
    userId:this.serve.get_log_uId()
   } 
   bookCre={
    userId:this.serve.get_log_uId(),
    userType:this.serve.get_log_userType(),
    ownerId:this.serve.get_log_owner_id(),
    slotId:"",
    date:this.serve.get_date_today()
   }
   slotArr=[]
   gymData
   useData
   useArr=[]
   userId=this.serve.get_log_uId()
   hasError=true
   hideStatus=true
   date
   dateToday:any=this.serve.get_date_today()


  ngOnInit(): void {
     if(!this.serve.get_log_satus())
     {this.route.navigate([""])}
     ///this.get_slots()
      this.book_status()
     ///this.dateToday=new Date()
     console.log("date today:"+this.dateToday)
     console.log("date yesterday:"+this.serve.get_date())
  }
   book_status()
   {
     //console.log(this.slotCred)
      this.serve.get_user_info_with_book_status(this.slotCred)
      .subscribe((data)=>{
         ///console.log(data)
         if(JSON.parse(JSON.stringify(data)).Status=="Success")
          {
            this.useData=data
            this.date=this.useData.slotBookedDate
            console.log("data"+data)
             console.log("booked date:"+this.useData.slotBookedDate)
             if(!this.useData.slotBookedDate)
             {
               console.log("booked date not null")
               if(this.useData.slotBookedDate==this.serve.get_date_today())
               {
                this.route.navigate(['already-booked'])
               }
               else
               {
                this.hideStatus=false
               }
              
             }
             else
             {
              this.hideStatus=false
             }
            
          }
          else
          {console.log("not found")}
           
          
      })
   }
 
  onSubmit(id)
  {
    
    this.bookCre.slotId=id
    ///console.log(this.serve.get_log_uId())
    console.log(this.bookCre)
    this.serve.book_slot(this.bookCre)
     .subscribe((data)=>{
           console.log(data)
           if(JSON.parse(JSON.stringify(data)).Status=="Success")
           {
             alert("successfully booked !!")
             this.hideStatus=false
           }
           else
           {
             alert("something went wrong !! try again")
           }
      })


  }
}
