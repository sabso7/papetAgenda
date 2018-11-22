import { Component } from '@angular/core';
import { ApiCallService } from "../api-call.service"
import  * as moment  from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})

export class AboutPage {

  events: any;

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
  var time = moment(date).format('D MMM YYYY');
  return time;
}
getTime(time){
  var D = moment(time).format('H:mm');
  return D;
}

}
