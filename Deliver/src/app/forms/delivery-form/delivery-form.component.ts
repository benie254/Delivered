import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/classes/delivery/delivery';
import { DeliveryService } from 'src/app/services/delivery/delivery.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {
  num = 254;
  YYYY = new Date().getFullYear();
  MM = new Date().getMonth() + 1;
  DD = new Date().getDate();
  today = new Date().toLocaleString();
  // today = this.YYYY + '-' + this.MM + '-' + this.DD + ' ' + this.time

  constructor(
    private delService: DeliveryService,
  ) { }

  ngOnInit(): void {
    // if(this.MM < 10){
    //   this.today = this.YYYY + '-' + 0 + this.MM + '-' + this.DD + ' ' + this.time;
    // }
  }
  deliver(data){
    Notiflix.Loading.dots("processing...")
    this.delService.deliver(data).subscribe({
      next: (res) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success("Delivery posted!");
        this.reports();
        this.reset();
      },
      error: (err) => {
        
      }
    })
  }
  reports(){
    this.delService.getReports().subscribe({
      next: (res) => {
      }
    })
  }
  reset(){
    const form = (<HTMLFormElement>document.getElementById('deliveryForm'));
    setTimeout(() => {
      form.reset();
    }, 250)
  }


}
