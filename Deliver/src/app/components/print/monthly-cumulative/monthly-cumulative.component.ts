import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';

@Component({
  selector: 'app-monthly-cumulative',
  templateUrl: './monthly-cumulative.component.html',
  styleUrls: ['./monthly-cumulative.component.css']
})
export class MonthlyCumulativeComponent implements OnInit {
  monthlyCumul: any;
  month = new Date().getMonth();
  year = new Date().getFullYear();
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
    this.monthlyCumulative();
  }
  monthlyCumulative(){
    Notiflix.Loading.dots('processing...')
    this.delService.getMonthlyCumulative().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.monthlyCumul = res;
      }
    })
  }
  print(){
    window.print();
  }

}
