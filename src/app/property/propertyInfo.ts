import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse, Property } from '../../app/property/property.model';
import { PropertyService } from '../../app/services/property.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FinancialPerformanceTabsPage } from '../../pages/financialPerformanceTabs/financialPerformanceTabs';


@Component({
  selector: 'page-propertyInfo',
  templateUrl: 'propertyInfo.html'
})
export class PropertyInfoPage {
  
  public property: Property;
  public show = false;
  private selectId: number;
  constructor(public navCtrl: NavController, 
    //private app: MyApp,
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

  onPropertyClicked(){
    //let nav = this.app.nav;
   // this.nav.push(FinancialPerformanceTabsPage);
    this.navCtrl.parent.parent.push(FinancialPerformanceTabsPage, this.selectId);
  }

}
