import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConstantService } from '../services/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailModal= '';
  passwordModal = '';
  constructor(public constant:ConstantService, public navCtrl:NavController) { }

  ngOnInit() {
  }

  checkLoginClick(){
    if (!this.emailModal) {
      this.constant.ToastCustom('Please enter email');
    } else if (!this.constant.isValidEmail(this.emailModal.trim())) {
      this.constant.ToastCustom('Please Enter a valid Email Address');
    }else if (!this.passwordModal) {
      this.constant.ToastCustom('Please enter password');      
    }else if (this.constant.validLogin.email === this.emailModal && this.constant.validLogin.password === this.passwordModal) {
      localStorage.setItem('userData',JSON.stringify({ email:this.emailModal, password:this.passwordModal}))
      this.navCtrl.navigateRoot(['']);
    }else {
      this.constant.ToastCustom('Please enter valid credentials.'); 
    }
  }

}
