import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private contacts: Contact
  ) { }

  ngOnInit() {
  }

  addContact(number) {

    this.contacts.name = new ContactName(null, 'Doe', 'aaabJohn');
    this.contacts.phoneNumbers = [new ContactField('mobile', number)];
    this.contacts.save().then(
      () => {
        console.log('Contact saved!', this.contacts);
      },
      (error: any) => {
        console.error('Error saving contact.', error);
        this.phoneCall(number);
      }
    );
  }

  phoneCall(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
