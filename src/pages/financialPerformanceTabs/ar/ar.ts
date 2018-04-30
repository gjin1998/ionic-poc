import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ar',
  templateUrl: 'ar.html'
})
export class ARPage {

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams);
  }

}
