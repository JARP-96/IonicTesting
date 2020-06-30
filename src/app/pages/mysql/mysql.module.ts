import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponentModule } from '../../components/toolbar/toolbar.component.module';


import { MysqlPageRoutingModule } from './mysql-routing.module';

import { MysqlPage } from './mysql.page';

@NgModule({
  imports: [
    ToolbarComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MysqlPageRoutingModule,
  ],
  declarations: [MysqlPage]
})
export class MysqlPageModule {}
