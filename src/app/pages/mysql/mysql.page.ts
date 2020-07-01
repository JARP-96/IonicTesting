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

  readonly ROOT_URL_1 = "http://192.168.0.29/codeigniter/public/calles";
  readonly ROOT_URL_2 = "http://192.168.0.29/codeigniter/public/marcas/post";
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
      marca: "ZZZZ"
    }
    let coso = [];
    coso.push(marca);
    console.log("**** ", JSON.stringify(coso));
    this.http.post(this.ROOT_URL_2, JSON.stringify(coso)).subscribe(res => {
      console.log(res);
    });
  }


}
