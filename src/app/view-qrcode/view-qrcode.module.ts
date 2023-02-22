import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewQrcodePageRoutingModule } from './view-qrcode-routing.module';
import { ViewQrcodePage } from './view-qrcode.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,QRCodeModule,
    ViewQrcodePageRoutingModule
  ],
  declarations: [ViewQrcodePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewQrcodePageModule {}
