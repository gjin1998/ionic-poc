import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse, PropertyVM, Property } from '../../app/property/property.model';
import { PropertyService } from '../../app/services/property.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Content } from 'ionic-angular/components/content/content';
import { NavParams } from 'ionic-angular/navigation/nav-params';

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
    private loadingCtrl:LoadingController) {
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

  

}
