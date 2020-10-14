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
    this.checkBluetoothEnable();
  }

  async presentAlert(sub, message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: sub,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  // UE MEGABOOM, 88:C6:26:F1:A7:54

  checkBluetoothEnable() {
    this.bluetoothSerial.isEnabled().then(success => {
      this.presentAlert("Enable Success", success);
      this.bluetoothSerial.list().then(res => {
        this.presentAlert("List", JSON.stringify(res.name));
      });
    }, error => {
      this.presentAlert("Enable Error", error);
    })
  }

  connectBluetooth() {
    this.bluetoothSerial.connectInsecure("88:C6:26:F1:A7:54")
      .subscribe((res) => {
        this.presentAlert("Connect Success", res);
      }, error => {
        this.presentAlert("Connect Error", error);
      });
  }
  sendChar() {
    this.bluetoothSerial.write('A').then((success) => {
      this.presentAlert("Char", success);
    }, (failure) => {
      this.presentAlert("Char", failure);
    })
      .catch((error) => {
        this.presentAlert("Char", error);
      });
  }
  sendInt() {
    this.bluetoothSerial.write(1).then((success) => {
      this.presentAlert("Int", success);
    }, (failure) => {
      this.presentAlert("Int", failure);
    })
      .catch((error) => {
        this.presentAlert("Int", error);
      });
  }
  sendString() {
    this.bluetoothSerial.write('hello world').then((success) => {
      this.presentAlert("String", success);
    }, (failure) => {
      this.presentAlert("String", failure);
    })
      .catch((error) => {
        this.presentAlert("String", error);
      });
  }

  sendBytes() {
    this.bluetoothSerial.write([186, 220, 222]).then((success) => {
      this.presentAlert("Bytes", success);
    }, (failure) => {
      this.presentAlert("Bytes", failure);
    })
      .catch((error) => {
        this.presentAlert("Bytes", error);
      });
  }

  sendTypedArray() {
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data).then((success) => {
      this.presentAlert("Typed Array", success);
    }, (failure) => {
      this.presentAlert("Typed Array", failure);
    })
      .catch((error) => {
        this.presentAlert("Typed Array", error);
      });
  }

  sendArrayBuffer() {
    var data = new Uint8Array(4);
    data[0] = 0x41;
    data[1] = 0x42;
    data[2] = 0x43;
    data[3] = 0x44;
    this.bluetoothSerial.write(data.buffer).then((success) => {
      this.presentAlert("Array Buffer", success);
    }, (failure) => {
      this.presentAlert("Array Buffer", failure);
    })
      .catch((error) => {
        this.presentAlert("Array Buffer", error);
      });
  }

}
