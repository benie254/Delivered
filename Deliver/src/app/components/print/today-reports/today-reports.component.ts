import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';

@Component({
  selector: 'app-today-reports',
  templateUrl: './today-reports.component.html',
  styleUrls: ['./today-reports.component.css']
})
export class TodayReportsComponent implements OnInit {
  todayReps: any;
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
    this.todayReports();
  }
  todayReports(){
    Notiflix.Loading.dots('processing...')
    this.delService.getTodayReports().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.todayReps = res;
      }
    })
  }
  print(){
    window.print();
  }

}
