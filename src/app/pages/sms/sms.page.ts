import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  constructor(
    private sms: SMS
  ) { }

  ngOnInit() {
  }

  sendSMS(number) {
    let options = {
      android: {
        intent: ''  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
      }
    }
    this.sms.send(number, '2 - Hello world!', options).then(res => {
      console.log(res);
    }
    );
  }
}
