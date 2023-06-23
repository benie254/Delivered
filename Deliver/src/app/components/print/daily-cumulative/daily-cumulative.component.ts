import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';

@Component({
  selector: 'app-daily-cumulative',
  templateUrl: './daily-cumulative.component.html',
  styleUrls: ['./daily-cumulative.component.css']
})
export class DailyCumulativeComponent implements OnInit {
  dailyCumul: any;
  today = new Date();
  authenticated: boolean = false;

  constructor(
    private delService: DeliveryService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.authenticated = true; 
    } else {
      this.authenticated = false; 
      this.authService.logout();
      Notiflix.Report.failure(
        "Unauthorized!",
        "Sorry, you do not have permissions to view this page.",
        "Too bad"
      )
      this.router.navigate(['/'])
      setTimeout(() => {
        location.reload();
      },5000)
    }
    this.dailyCumulative();
  }
  dailyCumulative(){
    Notiflix.Loading.dots('processing...')
    this.delService.getDailyCumulative().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.dailyCumul = res;
      }
    })
  }
  print(){
    window.print();
  }

}
