import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialSharingPageRoutingModule } from './social-sharing-routing.module';

import { SocialSharingPage } from './social-sharing.page';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialSharingPageRoutingModule,
    ToolbarComponentModule
  ],
  declarations: [SocialSharingPage]
})
export class SocialSharingPageModule {}
