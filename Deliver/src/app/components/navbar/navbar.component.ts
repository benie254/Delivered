import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean = false;
  username: any;

  constructor(
    private authS: AuthService,
  ) { }

  ngOnInit(): void {
    if(this.authS.currentUserValue){
      this.authenticated = true;
      this.username = this.authS.currentUserValue.username
    }else{
      this.authenticated = false;
    }
  }
  logout(){
    this.authS.logout();
    setTimeout(() => {
      location.reload();
    },500)
  }

}
