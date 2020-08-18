import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from './must-match.validator';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  spinnerVisible=false;
  btnVi=true;

  constructor(private formBuilder: FormBuilder,public serve:GetDataServiceService,public route:Router) { }
  memberData={
    userName:"",
    phoneNumber:Number,
    password:"",
    userType:"",
    ownerId:""
  }
  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }
     

    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      phone: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
        }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.spinnerVisible=true;
     this.btnVi=false;

     //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
     this.memberData.userName=this.registerForm.value.userName
     this.memberData.phoneNumber=this.registerForm.value.phone
     this.memberData.password=this.registerForm.value.password
     this.memberData.userType=this.serve.get_log_userType()
     this.memberData.ownerId=this.serve.get_log_uId()
       
      console.log(this.memberData)
     this.serve.register_member(this.memberData)
     .subscribe((data)=>{
      this.spinnerVisible=false;
      this.btnVi=true;
        
      console.log(data)
      if(JSON.parse(JSON.stringify(data)).Status=="Success")
      {
        alert("new member added successfully :)")
      }
      else if(JSON.parse(JSON.stringify(data)).Status=="user exists")
      {
        alert("member exists")
      }
      else
      {
        alert("some thing went wrong !!! try again ")
      }
     })

}


}
