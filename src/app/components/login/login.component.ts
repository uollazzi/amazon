import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { LoginDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = new LoginDTO();
  errorMessage = "";

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login() {
    this.auth.login(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe(dati => {
        if (dati) {
          console.log(dati);
          localStorage.setItem("user", JSON.stringify(dati));
          this.router.navigate([""]);
        }
      });
  }
}
