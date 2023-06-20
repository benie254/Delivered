import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { first, Subject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { MessagesService } from 'src/app/helpers/errors/messages.service'; 
import { AuthService } from 'src/app/services/auth/auth.service';
import { MyErrorStateMatcher } from 'src/app/services/matcher/matcher.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  authenticated: boolean = false;
  matcher = new MyErrorStateMatcher();
  private unsubscribe$ = new Subject<void>();
  err: any;
  res: any;

  constructor(
    private authService:AuthService,
    private router:Router,
    private messageS:MessagesService,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.authenticated = true; 
      this.router.navigate(['/'])
    } else {
      this.authenticated = false; 
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }
  isValid(event: boolean): void {
    // console.log(event);
  }
  logIn(userData: User): void {
    Notiflix.Loading.hourglass('processing... please wait.');
    this.authService.login(userData).subscribe({
      next: (data: User) => {
        Notiflix.Loading.remove();
                Notiflix.Notify.success('Welcome, ' + data.username);
                console.warn("token:",this.authService.currentUserValue);
                if(this.authService.currentUserValue){
                  this.router.navigate(['/'])
                  this.authenticated = true;
                  setTimeout(() => {
                    location.reload();
                  },500)
                }else{
                  this.authenticated = false;
                  this.authService.logout();
                  this.router.navigate(['/auth']);
                  setTimeout(() => {
                    location.reload();
                  },5)
                }
              }
    }
        );
    }
}