import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.page.html',
  styleUrls: ['./mysql.page.scss'],
})
export class MysqlPage implements OnInit {

  posts: any;

  readonly ROOT_URL_1 = "http://192.168.0.32/codeigniter/public/calles";
  readonly ROOT_URL_2 = "http://192.168.0.32/codeigniter/public/marcas/post";
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public httpNative: HTTP) { }

  ngOnInit() {
  }

  getData() {
    this.http.get(this.ROOT_URL_1)
      .subscribe(calles => {
        this.posts = calles;
        console.log(this.posts);
      });
  }
  getDataNative() {
    this.httpNative.get(this.ROOT_URL_1, {}, {})
      .then(res => {
        this.posts = res.data;
        console.log("*** ", this.posts);
        console.log(res.status);
        console.log(res.data); // data received by server
        console.log(res.headers);
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });
  }
}
