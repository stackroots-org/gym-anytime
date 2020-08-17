import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
   loginStatus
   userTye
  constructor(public serve:GetDataServiceService) { }

  ngOnInit(): void {
    this.check_login_status()
  }
  check_login_status()
  {
     this.loginStatus=this.serve.get_log_satus()
     this.userTye=this.serve.get_log_userType()
  }
}
