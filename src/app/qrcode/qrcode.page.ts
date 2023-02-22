import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  constructor(private qrScanner: QRScanner, public detectChange: ChangeDetectorRef, public alertController:AlertController,
    public navCtrl:NavController) { }

  ngOnInit() {
    // const navigationExtras: NavigationExtras = {
    //   state: {value :'vivek jayswal'}
    // };
    // this.navCtrl.navigateForward(['/view-qrcode'], navigationExtras);
  }

  ionViewDidEnter(){
    setTimeout(() => {
      (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
      window.document.body.style.backgroundColor = 'transparent';
      this.getQrCodeGenrate();
    }, 300);
  }

  getQrCodeGenrate() {
    this.detectChange.detectChanges();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            if (text) {
              this.qrScanner.hide();
              scanSub.unsubscribe();
              // alert(text);
              this.scanSuccess(text);
            } else {
              this.presentAlert();
            }
          });
          this.qrScanner.resumePreview();
          this.qrScanner.show()
            .then((data: QRScannerStatus) => {
              console.log(data);
              console.log('data==>', data);
            }, err => {
              console.log(err);
              console.log('err', err);
            });
        }
      }).catch((e: any) => {
        console.log('e==>', e);
        // this.navCtrl.pop();
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Important message',
      message: 'Invalid QR Code!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.getQrCodeGenrate();
          }
        }
      ]
    });
    await alert.present();
  }

  scanSuccess(text: string){
    this.detectChange.detectChanges();
     const navigationExtras: NavigationExtras = {
      state: {value : text}
    };
    this.navCtrl.navigateForward(['/view-qrcode'], navigationExtras);
  }

  ionViewDidLeave() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    window.document.body.style.backgroundColor = '#FFF';
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }
}
