import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  sendChar() {
    this.bluetoothSerial.write('A').then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }
  sendInt() {
    this.bluetoothSerial.write(1).then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }
  sendString() {
    this.bluetoothSerial.write('hello world').then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }

  sendBytes() {
    this.bluetoothSerial.write([186, 220, 222]).then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }

  sendTypedArray() {
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data).then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }

  sendArrayBuffer() {
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data.buffer).then((success) => {
      this.presentAlert(success);
    }, (failure) => {
      this.presentAlert(failure);
    })
      .catch((error) => {
        this.presentAlert(error);
      });
  }

}
