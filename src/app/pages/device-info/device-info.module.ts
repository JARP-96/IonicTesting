import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

import { DeviceInfoPageRoutingModule } from './device-info-routing.module';

import { DeviceInfoPage } from './device-info.page';

@NgModule({
  imports: [
    ToolbarComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceInfoPageRoutingModule
  ],
  declarations: [DeviceInfoPage]
})
export class DeviceInfoPageModule {}
