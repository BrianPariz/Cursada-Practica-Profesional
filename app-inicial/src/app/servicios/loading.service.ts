import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading;

  constructor(private loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async showLoading(message: string) {

    this.loadingCtrl.create({
      message
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
  }

  closeLoading(message?: string) {
    setTimeout(() => {
      this.loading.dismiss();
      
      if (message) {
        alert(message);
      }
    }, 2000);
  }

  closeLoadingAndRedirect(route: string) {
    setTimeout(() => {
      this.loading.dismiss();
      this.router.navigate(['/home']);
    }, 2000);
  }
}
