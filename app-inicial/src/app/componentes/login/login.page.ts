import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingService } from 'src/app/servicios/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;
  private loading;

  constructor(private authService: AuthService, private loadingService: LoadingService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.loadingService.showLoading("Espere..");

    this.authService.logIn(this.email, this.password)
      .then(res => {
        this.loadingService.closeLoadingAndRedirect("/home");
      })
      .catch(err => {
        this.loadingService.closeLoading("Verifique usuario y contraseña");
      });
  }
}
