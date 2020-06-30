import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.page.html',
  styleUrls: ['./mysql.page.scss'],
})
export class MysqlPage implements OnInit {

  posts: any;

  readonly ROOT_URL_1 = "http://192.168.0.32/codeigniter/public/calles";
  readonly ROOT_URL_2 = "http://192.168.0.32/codeigniter/public/marcas";
  constructor(
    public navCtrl: NavController,
    public http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    this.http.get(this.ROOT_URL_1)
      .subscribe(calles => {
        this.posts = calles;
        console.log(this.posts);
      });
  }

  setData() {
    let marca = {
      marca: "FIAT"
    }
    this.http.post(this.ROOT_URL_2, marca);
  }


}
