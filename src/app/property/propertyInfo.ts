import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, ModalController } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse, Property } from '../../app/property/property.model';
import { PropertyService } from '../../app/services/property.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FinancialPerformanceTabsPage } from '../../pages/financialPerformanceTabs/financialPerformanceTabs';
import { GeoService } from '../services/geo.service';
import { MapPage } from '../../pages/googleMap/map';


@Component({
  selector: 'page-propertyInfo',
  templateUrl: 'propertyInfo.html'
})
export class PropertyInfoPage {
  
  public property: Property;
  public show = false;
  private selectId: number;
  constructor(public navCtrl: NavController, 
    private navParams: NavParams,
    private service: PropertyService,
    private loadingCtrl:LoadingController,
    private geoService: GeoService,
    private modalCtrl: ModalController) {
      this.selectId = this.navParams.data.propertyId;
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.service.getProperty(this.selectId).subscribe( x=>
        {
          this.property = x; 
          this.show = true;
          loading.dismiss();
        }
      );
  }

  ionViewDidLoad(){
   
  }

  onAddressClicked(){
    let address  = `${this.property.addressLine1}, ${this.property.city}, ${this.property.state}`;
    this.geoService.getLocation(address).subscribe(data =>{
      if(data.results[0] != undefined) {
        const lat = (data.results[0].geometry.location.lat).toString();
        const lng = (data.results[0].geometry.location.lng).toString();
        
        const location = {
          latitude: lat,
          longitude: lng,
          name: address
        }
   
          //let modal = this.modalCtrl.create(MapPage);
          //modal.present();
          this.navCtrl.parent.parent.push(MapPage, location);
          
 
      }
     });
  }

  onPropertyClicked(){
    //let nav = this.app.nav;
   // this.nav.push(FinancialPerformanceTabsPage);
    this.navCtrl.parent.parent.push(FinancialPerformanceTabsPage, this.selectId);
  }

}
