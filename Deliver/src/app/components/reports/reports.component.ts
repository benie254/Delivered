import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  allReps: any;
  todayReps: any;
  dailyCumul: any;
  monthlyCumul: any;
  today = new Date();
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [2, 5, 10, 15];
  todayPage: number = 1;
  todayCount: number = 0;
  todayTableSize: number = 10;
  todayTableSizes: any = [2,5,10,15]
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  day = new Date().getDay();
  date = this.month + '/' + this.year;
  fullDate = this.day + '/' + this.month + '/' + this.year;
  authenticated: boolean = false;
  repId: any;
  dailyId: any;
  monthlyId: any;

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
    this.allReports();
    this.dailyCumulative();
    this.monthlyCumulative();
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
  allReports(){
    Notiflix.Loading.dots('processing...')
    this.delService.getAllReports().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.allReps = res;
      }
    })
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
  monthlyCumulative(){
    Notiflix.Loading.dots('processing...')
    this.delService.getMonthlyCumulative().subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        this.monthlyCumul = res;
      }
    })
  }
  emailMonthlyReport(data){
    Notiflix.Loading.dots('sending, please wait...')
    this.delService.postMonthlyReport(data).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Report.success(
          "Report sent!",
          "The requested report has been delivered to your email address.",
          "Okay"
        )
      }
    })
  }
  emailDailyReport(data){
    Notiflix.Loading.dots('sending, please wait...')
    this.delService.postDailyReport(data).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Report.success(
          "Report sent!",
          "The requested report has been delivered to your email address.",
          "Okay"
        )
      }
    })
  }
  onTableDataChange = (event: any): void => {
    this.page = event;
    this.allReports();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.allReports();
  }
  onTableDataChangeToday = (event: any): void => {
    this.todayPage = event;
    this.todayReports();
  }
  onTableSizeChangeToday(event: any): void {
    this.todayTableSize = event.target.value;
    this.todayPage = 1;
    this.todayReports();
  }
  copyRepId(text: any){
    localStorage.setItem("reportId",text);
    this.repId = localStorage.getItem("reportId");
  }
  copyDailyId(text: any){
    localStorage.setItem("dailyId",text);
    this.dailyId = localStorage.getItem("dailyId");
  }
  copyMonthlyId(text: any){
    localStorage.setItem("monthlyId",text);
    this.monthlyId = localStorage.getItem("monthlyId");
  }
  delWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this report? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.deleteRep();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
      }
    )
  }
  deleteRep(){
    Notiflix.Confirm
    Notiflix.Loading.circle('processing...')
    this.delService.deleteReport(this.repId).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
      }
    })
  }
  delDWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this daily report? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.deleteDaily();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
      }
    )
  }
  deleteDaily(){
    Notiflix.Confirm
    Notiflix.Loading.circle('processing...')
    this.delService.deleteDailyReport(this.dailyId).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
      }
    })
  }
  delMWarn(){
    Notiflix.Confirm.show(
      'Confirm delete',
      "Are you sure you want to delete this monthly report? This action cannot be undone",
      "I'm sure",
      "Take me back",
      () => {
        this.deleteMonthly();
        location.reload();
      },
      () => {
        Notiflix.Report.success(
          "Aborted!",
          "You have cancelled the delete request. In case you did so by mistake, please make a new request.",
          'Great',
        )
      }
    )
  }
  deleteMonthly(){
    Notiflix.Confirm
    Notiflix.Loading.circle('processing...')
    this.delService.deleteMonthlyReport(this.monthlyId).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
      }
    })
  }
  

}
