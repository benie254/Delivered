import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from 'src/app/services/matcher/matcher.service'; 
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { Subject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MessagesService } from 'src/app/helpers/errors/messages.service'; 
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgPasswordValidatorOptions } from 'ng-password-validator';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  authenticated: boolean;
  matcher = new MyErrorStateMatcher();
  private unsubscribe$ = new Subject<void>();
  err: any;
  res: any;
  noMatch: boolean;
  matched: boolean;
  values = '';
  value = '';
  noPass2: boolean;

  constructor(
    private authService:AuthService,
    private router:Router,
    private messageS:MessagesService,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.authenticated = true;
    }else{
      this.authenticated = false;
    }
    this.confirmPass();
  }
  options: NgPasswordValidatorOptions = {
    placement: 'right',
    type: 'popup',
    'custom-class': 'custom-class',
    rules: {
      'password': {
          'type': "range",
          'min': 8,
          'max': 25,
      },
      "include-symbol": true,
      "include-number": true,
      "include-lowercase-characters": true,
      "include-uppercase-characters": true,
    },
    shadow: true,
    offset: 15,
  };

  isValid(event: boolean): void {
    console.log(event);
  }
  onKeyOne(event: any){
    this.value = event.target.value; 
  }
  onKey(event: any){
    this.values = event.target.value; 
  }
  confirmPass(){
    let pass1 = document.getElementById("pass1").textContent;  
    var pass2 = document.getElementById("pass2").textContent;  
    if (pass1 == pass2) {
      this.noMatch = false;
    } else if (pass1 != pass2){
      this.noMatch = true;
    } 
  }
  signUp(userData: User): void {
    Notiflix.Loading.hourglass('processing... please wait.');
    this.authService.register(userData).subscribe({
      next: (data: User) => {
        Notiflix.Loading.remove();
                Notiflix.Notify.success('Welcome, ' + data.username);
                this.router.navigate(['/auth'])
              }
    }
        );
    }
}