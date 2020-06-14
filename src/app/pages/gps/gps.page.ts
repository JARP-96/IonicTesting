import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  latitude: any;
  longitude: any;

  constructor(
    private geolocation: Geolocation,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async getLocation() {
    const loading = await this.loadingController.create({
      message: 'Obteniendo ubicación...',
    });
    await loading.present();
    
    this.latitude = null;
    this.longitude = null;

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    await loading.dismiss();
  }

}
