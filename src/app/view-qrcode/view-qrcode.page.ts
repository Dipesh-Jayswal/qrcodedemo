import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-qrcode',
  templateUrl: './view-qrcode.page.html',
  styleUrls: ['./view-qrcode.page.scss'],
})
export class ViewQrcodePage implements OnInit {
  public qrCodeDownloadLink: SafeUrl = "";
  qrCodeData: any;
  constructor(public router: Router, public navCtrl:NavController, private socialSharing: SocialSharing) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.qrCodeData = this.router.getCurrentNavigation()?.extras?.state?.['value'];
    }
    console.log(this.qrCodeData);
   }

  ngOnInit() {
  }

  onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
  }

  scanAgain(){
    this.navCtrl.back();
  }

  socialShare(){
    // this.sanitizer.bypassSecurityTrustResourceUrl(this.qrCodeDownloadLink)
    this.socialSharing.share('share qr code', '', '', ).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
  }
}
