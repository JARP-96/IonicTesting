import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {
  did: any;
  serial: any;

  constructor(
    private device: Device
  ) { }

  ngOnInit() {
  }

  async getDeviceID() {
    this.did = this.device.uuid;
  }

}
