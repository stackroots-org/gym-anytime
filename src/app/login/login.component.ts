import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GetDataServiceService} from '../get-data-service.service'

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

  constructor(private formBuilder: FormBuilder,public serve:GetDataServiceService) { }
    
  ngOnInit(): void {
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
          
          console.log(JSON.parse(JSON.stringify(data)).Status)

          if(JSON.parse(JSON.stringify(data)).Status=="Success")
          {
            alert("login success !!")
            
          }
          else
          {
             alert("something went wrong !! please  try again")
          }
          
         console.log(data)
     });
    console.log(this.serve.get_me())


}

    
}
