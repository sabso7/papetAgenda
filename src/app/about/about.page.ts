import { Component } from '@angular/core';
import { ApiCallService } from "../api-call.service"
import { Event } from '../event'
import  * as moment  from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})

export class AboutPage {

  events: Event[];

constructor(private apiCallService: ApiCallService){
}
 
ngOnInit(){
  this.showEvent();
}


showEvent() {
  this.apiCallService.getEvent()
  .subscribe((eventArray) => {
this.events = eventArray.rows;
console.log(this.events)

})
}

getDate(date){
  date = moment().format('D MMM YYYY');
  return date;
}
getTime(time){
  time = moment().format('H:mm');
  return time;
}

}
