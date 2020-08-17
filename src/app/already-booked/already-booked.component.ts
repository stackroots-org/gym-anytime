import { Component, OnInit } from '@angular/core';
import {GetDataServiceService} from '../get-data-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-already-booked',
  templateUrl: './already-booked.component.html',
  styleUrls: ['./already-booked.component.css']
})
export class AlreadyBookedComponent implements OnInit {

  constructor(public serve:GetDataServiceService,public route:Router) { }

  ngOnInit(): void {
    if(!this.serve.get_log_satus())
    {this.route.navigate([""])}
  }

}
