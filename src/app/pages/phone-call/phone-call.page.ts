import { Component, OnInit, Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-phone-call',
  templateUrl: './phone-call.page.html',
  styleUrls: ['./phone-call.page.scss'],
})
export class PhoneCallPage implements OnInit {
  @Input()
  number: number;

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  phoneCall(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
