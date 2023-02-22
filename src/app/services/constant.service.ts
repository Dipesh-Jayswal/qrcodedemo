import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  validLogin = { email:'test@test.com', password:'8256455'};

  constructor(public toastCtrl:ToastController) { }

    // Toast Message
    async ToastCustom (message: string) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
        position: 'top'
      })
      toast.dismiss(() => {
        console.log('Dismissed toast');
      })
      toast.present()
    }

 // Email Validation
    isValidEmail (email:string) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!re.test(email)) {
        return false;
      } else {
        return true;
      }
    }

      // Get current User jsonError
  getUserData () {
    const data = localStorage.getItem('userData');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}
