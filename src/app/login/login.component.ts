import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GetDataServiceService} from '../get-data-service.service'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
   spinnerVisible=false;
   btnVisible=true;
   uID=""
   type=""
   userObj;

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService,private formBuilder: FormBuilder,public serve:GetDataServiceService,public route:Router) { }
    
  ngOnInit(): void {
        console.log(this.storage.get('key'))
       if(this.storage.get('key'))
       {      
             if(this.serve.get_log_userType()=="gym")
             {
              this.route.navigate(['bookings'])
             }
             if(this.serve.get_log_userType()=="user")
             {
              this.route.navigate(['book-sloat'])
             }
             
       }
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required,Validators.pattern(new RegExp("[0-9]{10}"))]],
      userType: ['user', [Validators.required]]

  });


  }
  get f() { return this.loginForm.controls; }
   
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
     
    this.spinnerVisible=true;
    this.btnVisible=false;
    
     this.serve.login_user(this.loginForm.value)
     .subscribe((data)=>{   
        this.spinnerVisible=false;
        this.btnVisible=true;
           //console.log(data)
         // console.log(JSON.parse(JSON.stringify(data)).Status)
         
          if(JSON.parse(JSON.stringify(data)).Status=="Success")
          {
            alert("login success !!")
            
             this.userObj=data;
            //  this.uID=this.userObj._id;
            //  this.type=this.userObj.userType;
            
            if(this.loginForm.value.userType=="gym")
            {
              this.storage.set('key',true); 
              this.storage.set('uId',this.userObj.ownerId);
              this.storage.set('userType',this.loginForm.value.userType)
              this.route.navigate(['bookings'])
             window.location.reload();
            }
             if(this.loginForm.value.userType=="user")
            {
              this.storage.set('key',true); 
              this.storage.set('uId',this.userObj.userId);
              this.storage.set('owner',this.userObj.ownerId); 
              this.storage.set('userType',this.loginForm.value.userType)
              
              this.route.navigate(['book-sloat'])
              window.location.reload();
            }
            
          }
          else
          {
             alert("something went wrong !! please  try again")
          }
        
     });
   
}

    
}
