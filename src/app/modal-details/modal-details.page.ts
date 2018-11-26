import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiCallService } from "../api-call.service";
import  * as moment  from 'moment';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.page.html',
  styleUrls: ['./modal-details.page.scss'],
})
export class ModalDetailsPage implements OnInit {
  val;
  events: any;
  event: any;
  constructor(private apiCallService: ApiCallService , public modalController: ModalController, public navParams: NavParams) {
    this.val = this.navParams.get('value'); 
  }
  ngOnInit() {
    this.getEvent();
  }
  
  getEvent(){
    this.apiCallService.getEvent()
    .subscribe((data) => {
      this.events = data.rows;
      this.events.forEach(element => {
        if(element.id == this.val){
          this.event = element;
        }
      });
    })
  }

  getDate(date){
    var time = moment(date).format('D / MM / YYYY à H:mm');
    return time;
  }
  
  dismiss(){
    this.modalController.dismiss();
  }
}
