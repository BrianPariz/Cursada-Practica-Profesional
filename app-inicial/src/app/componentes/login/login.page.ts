import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.logIn(this.email, this.password)
      .then(res => {
        this.router.navigate(['/home']);
      })
      .catch(err => {
        alert("Error al loguearse papaaaaaaaa")
      })
  }
}
