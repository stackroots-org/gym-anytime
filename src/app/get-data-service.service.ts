import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(public httpObj:HttpClient) { }

  login_user(data)
  {
    console.log(data)
     return this.httpObj.post("https://gymcenterbackend.herokuapp.com/login",data)

  }
  get_me()
  {
    return "iam fine"
  }
}
