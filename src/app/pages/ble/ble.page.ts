import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-ble',
  templateUrl: './ble.page.html',
  styleUrls: ['./ble.page.scss'],
})
export class BlePage implements OnInit {

  devices: any[] = [];
  constructor(
    private ble: BLE,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.scan();
  }

  scan() {
    this.devices = [];
    this.ble.startScan([]).subscribe(res => {
      console.log(JSON.stringify(res));
    })
  }

  connectBLE() {

  }
}
