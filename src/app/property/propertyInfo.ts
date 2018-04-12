import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse } from '../../app/property/property.model';
import { PropertyService } from '../../app/services/property.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Content } from 'ionic-angular/components/content/content';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-propertyInfo',
  templateUrl: 'propertyInfo.html'
})
export class PropertyInfoPage {
  public property: PropertySearchResponse
  constructor(public navCtrl: NavController, 
    private navParams: NavParams,
    private loadingCtrl:LoadingController) {
      this.property = this.navParams.data;
      console.log(this.property);
  }

  ionViewDidLoad(){
    
  }

  

}
