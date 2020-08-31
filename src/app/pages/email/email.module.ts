import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';
import { IonicModule } from '@ionic/angular';

import { EmailPageRoutingModule } from './email-routing.module';

import { EmailPage } from './email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailPageRoutingModule,
    ToolbarComponentModule
  ],
  declarations: [EmailPage]
})
export class EmailPageModule {}
