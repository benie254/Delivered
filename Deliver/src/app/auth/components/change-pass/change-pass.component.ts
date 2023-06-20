import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  authenticated: boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
      this.router.navigate(['/auth'])
    }
  }
  

}