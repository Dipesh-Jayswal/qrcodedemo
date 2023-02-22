import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstantService } from './services/constant.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,QRCodeModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [ConstantService,QRScanner,SocialSharing,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
