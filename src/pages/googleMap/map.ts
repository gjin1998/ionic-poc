import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


declare var window: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public map: any = {};

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams.data)
  }

  ionViewDidLoad() {
   
    this.map = {
      lat: Number(this.navParams.data.latitude),
      lng: Number(this.navParams.data.longitude),
      zoom: 12, 
      markerLabel: this.navParams.data.name,
    };

  }

  goToDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}