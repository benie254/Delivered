import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from 'src/app/classes/delivery/delivery';
import { ReqHandlerService } from 'src/app/helpers/requests/req-handlers.service';

// const apiURL = 'http://127.0.0.1:8000/api/';
const apiURL = 'https://delivered-api-production.up.railway.app/api/';

@Injectable({
  providedIn: 'any'
})
export class DeliveryService {
  deliv = apiURL + 'delivery';
  reports = apiURL + 'reports';
  allReports = apiURL + 'reports/all';
  todayReports = apiURL + 'reports/today';
  dailyCumul = apiURL + 'reports/cumulative/daily';
  monthlyCumul = apiURL + 'reports/cumulative/monthly';
  emailDaily = apiURL + 'reports/cumulative/email/daily';
  emailMonthly = apiURL + 'reports/cumulative/email/monthly';
  delRep = apiURL + 'reports/delete/';
  delDaily = apiURL + 'reports/cumulative/daily/delete/';
  delMonthly = apiURL + 'reports/cumulative/monthly/delete/';


  constructor(
    private handler: ReqHandlerService,
  ) { }

  deliver(data: any): Observable<Delivery> {
    return this.handler.handlePOST<Delivery>(this.deliv, data);
  }
  getAllReports(): Observable<Delivery> {
    return this.handler.handleGET<Delivery>(this.allReports);
  }
  getReports(): Observable<Delivery> {
    return this.handler.handleGET<Delivery>(this.reports);
  }
  getTodayReports(): Observable<Delivery> {
    return this.handler.handleGET<Delivery>(this.todayReports);
  }
  getDailyCumulative(): Observable<Delivery> {
    return this.handler.handleGET<Delivery>(this.dailyCumul);
  }
  getMonthlyCumulative(): Observable<Delivery> {
    return this.handler.handleGET<Delivery>(this.monthlyCumul);
  }
  postMonthlyReport(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.emailMonthly,data)
  }
  postDailyReport(data: any): Observable<any>{
    return this.handler.handlePOST<any>(this.emailDaily,data)
  }
  deleteReport(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.delRep + id)
  }
  deleteDailyReport(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.delDaily + id)
  }
  deleteMonthlyReport(id: number): Observable<any>{
    return this.handler.handleDEL<any>(this.delMonthly + id)
  }
}
