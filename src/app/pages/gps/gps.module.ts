import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

import { IonicModule } from '@ionic/angular';

import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';

@NgModule({
  imports: [
    ToolbarComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GpsPageRoutingModule
  ],
  declarations: [GpsPage]
})
export class GpsPageModule {}
