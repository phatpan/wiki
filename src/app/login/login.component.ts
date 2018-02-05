import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private firebaseService: FirebaseService, private router: Router) { }
  loginWithFacebook() {
    this.firebaseService.loginWithFacebook().then(() => {
      this.router.navigate(['/home']);
    });
  }

  logoutWithFacebook() {
    this.firebaseService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
