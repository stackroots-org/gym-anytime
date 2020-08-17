import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {GetDataServiceService} from '../get-data-service.service'
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService,public route:Router,public serve:GetDataServiceService) { }

  ngOnInit(): void {
    if(!this.serve.get_log_satus())
     {
      this.route.navigate([""])
     }
  }
  logOut(){
     alert("log out")
     this.storage.remove('key');
     this.storage.remove('uId');
     this.storage.remove('userType'); 
     this.storage.remove('owner'); 
     this.route.navigate([""])
     window.location.reload();
  }
  cancel()
  {
    this.route.navigate(['bookings'])
  }
}
