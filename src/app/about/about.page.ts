import { Component } from '@angular/core';
import { ApiCallService } from "../api-call.service"
import  * as moment  from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})

export class AboutPage {

  events: [];

constructor(private apiCallService: ApiCallService){
}
 
ngOnInit(){
  this.showEvent();
}

showEvent() {
  this.apiCallService.getEvent()
  .subscribe((data) => {
this.events = data.rows;
console.log(this.events)
})
}

getDate(date){
  var time = moment(date).format('D / MM / YYYY à H:mm');
  return time;
}


}
