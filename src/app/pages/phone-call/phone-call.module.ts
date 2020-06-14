import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

import { PhoneCallPageRoutingModule } from './phone-call-routing.module';

import { PhoneCallPage } from './phone-call.page';

@NgModule({
  imports: [
    ToolbarComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneCallPageRoutingModule
  ],
  declarations: [PhoneCallPage]
})
export class PhoneCallPageModule {}
