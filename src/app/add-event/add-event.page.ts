import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
 date= String;
 title: String;
 description: String;
 
  constructor(public router: ActivatedRoute ) {
this.date = this.router.snapshot.params.date

   }


  ngOnInit() {
  }

  getData(){
    console.log(this.title)
    console.log(this.description)

  }

}
