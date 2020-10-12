import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothPageRoutingModule } from './bluetooth-routing.module';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

import { BluetoothPage } from './bluetooth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothPageRoutingModule,
    ToolbarComponentModule
  ],
  declarations: [BluetoothPage]
})
export class BluetoothPageModule {}
