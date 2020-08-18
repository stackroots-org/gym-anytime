import { Injectable,Inject } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class GetDataServiceService {

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService,public httpObj:HttpClient) { }



  login_user(data)
  {
    console.log(data)
     return this.httpObj.post("https://gymcenterbackend.herokuapp.com/login",data)

  }
  get_user_data(data){
    return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym/slotdata",data)
  }
  register_member(data)
  {
     return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym/registeruser",data)
  }
  get_list_of_members(data)
  {
     return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym/listusers",data)
  }
  get_commen_gym_data(data)
  {
    return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym",data)
  }
  delete_slot(data)
  {
    return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym/deleteslot",data)
  }
  create_slot(data)
  {
     
    return this.httpObj.post("https://gymcenterbackend.herokuapp.com/gym/createslot",data)
  }
  book_slot(data)
  {
    return this.httpObj.post("https://gymcenterbackend.herokuapp.com/user/bookslot",data)
  }
  get_log_satus()
  {
    return this.storage.get('key');
  }
  get_log_uId()
  {
    return this.storage.get('uId');
  }
  get_log_userType()
  {
    return this.storage.get('userType')
  }
  get_log_owner_id()
  {
    return this.storage.get('owner');
  }
  get_date()
  {
    const today = new Date()
    const yesterday = new Date(today)

    yesterday.setDate(yesterday.getDate() - 1)

    today.toDateString()
      yesterday.toDateString()
     return yesterday
  }
  get_date_today()
  {
    //varr
    let current_datetime = new Date()
    let formatted_date = current_datetime.getDate()+ "/" + (current_datetime.getMonth()+1) + "/" + current_datetime.getFullYear()
    return formatted_date;
  }
  time_converter(tm)
  {
    var time,tmpHour,tmpMin,tmpFormat,newTime
     time=parseInt(tm.slice(0,2))
     tmpMin=tm.slice(3,5)
      tmpHour=time%12
      tmpFormat=time/12
      newTime
     if(tmpFormat<=1)
     {
       newTime=tmpHour+":"+tmpMin+":AM"
     }
     else
     {
      newTime=tmpHour+":"+tmpMin+":PM"
     }
     return newTime;
    //return tm.slice(3,5)
  }
}
