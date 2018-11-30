import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


@Injectable({
  providedIn: 'root'
})
export class LoginPage implements OnInit {

  error: any;
  username: any;


  private user = new BehaviorSubject(this.username);
  currentUser  = this.user.asObservable();
  
  constructor(private router: Router) { }

  validate(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if(this.username == null){
      this.error = 'Merci de renseigner une adresse mail';
    }
    else if(!regex.test(this.username)){
      this.error = 'Veuillez rentrer une adresse email valide!';
    }
    else{
      this.login();
    }
  }

  login(){
    this.router.navigateByUrl('/app/tabs/(home:home)');

  }

  ngOnInit() {
  }
  

}
