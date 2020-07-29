import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage implements OnInit {

  constructor(
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
  }

  sendMail() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
    
    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['jarp9665@gmail.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
