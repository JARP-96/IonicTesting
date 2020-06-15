import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

import { QrScannerPageRoutingModule } from './qr-scanner-routing.module';

import { QrScannerPage } from './qr-scanner.page';

@NgModule({
  imports: [
    ToolbarComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerPageRoutingModule
  ],
  declarations: [QrScannerPage]
})
export class QrScannerPageModule {}
