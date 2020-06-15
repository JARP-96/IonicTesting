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

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/posts"
  constructor(
    public navCtrl: NavController,
    public http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    console.log("I'm in!")
    this.http.get(this.ROOT_URL)
    .subscribe(tweets => console.log("**+ ", tweets));
    console.log("I'm out!")
  }

}
