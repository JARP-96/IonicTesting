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

  readonly ROOT_URL = "https://192.168.0.32/codeigniter/public/calle"
  constructor(
    public navCtrl: NavController,
    public http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    console.log("I'm in!")
    this.http.get(this.ROOT_URL)
    .subscribe(calles => console.log("*** ", calles));
    console.log("I'm out!")
  }

}
