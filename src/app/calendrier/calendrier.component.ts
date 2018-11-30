import { Component, OnInit } from '@angular/core';
import { ApiCallService } from "../api-call.service";
import  * as moment  from 'moment';
import { ModalController } from '@ionic/angular';
import { ModalDetailsPage } from '../modal-details/modal-details.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
  date: any ;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  events: any;
  tabDateEvent = [];
  user: string;
  
  constructor(private apiCallService: ApiCallService, public modalController: ModalController, public router: Router) { 
    this.ionViewWillEnter(), this.showEvent() ;
    
  }
  ngOnInit() {
   //  this.login.currentUser.subscribe(user => this.user = user)
   // console.log("hello " + this.user)
  }

  getDate(day, month , year){
   var dateRecup = this.router.navigateByUrl("app/tabs/(addEvent:addEvent/"+day +' '+month +' '+ year +")");
  }
  
  checkEvent(days , currentMonth , currentYear){
  var ilYaEvent = false;
    this.tabDateEvent.forEach(element =>{
        if(element == days +' ' + currentMonth.toLowerCase()+ ' ' + currentYear){
            ilYaEvent = true
            return ilYaEvent
        }
    })
    return ilYaEvent;
  }

  getAllData(){
    this.apiCallService.getEvent()
    .subscribe((data) => {
  this.events = data.rows;
  })
  }

  getId(day, currentMonth , currentYear){
    this.getAllData();
    this.events.forEach(element => {
      if(moment(element.doc.start_time).format('D MMMM YYYY') == day +' ' + currentMonth.toLowerCase()+ ' ' + currentYear){
        console.log(element.id);
        this.presentModal(element.id);
      }
    })
  }

  showEvent() {
    this.apiCallService.getEvent()
    .subscribe((data) => {
  this.events = data.rows;
  this.events.forEach(element => {
    moment.locale('fr');
    var time = moment(element.doc.start_time).format('D MMMM YYYY');
    this.tabDateEvent.push(time)
  });
  })
  }

  async presentModal(id) {
    const modal = await this.modalController.create({
      component: ModalDetailsPage,
      componentProps: {value:id}
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    this.getDaysOfMonth();
  }
  
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
  
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
  
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }
  
    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }
  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }
  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

}
