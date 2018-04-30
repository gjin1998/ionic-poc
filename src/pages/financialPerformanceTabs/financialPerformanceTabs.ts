import { Component } from '@angular/core';

import { NOIPage } from './noi/noi';
import { RevenuePage } from './revenue/revenue';
import { ExpensePage } from './expense/expense';
import { ARPage } from './ar/ar';
import { FinancialPerformanceService } from '../../app/services/financialPerformance.service';
import { FinancialPerformance } from '../../app/shared/models/financialPerformance.model';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';

@Component({
  templateUrl: 'financialPerformanceTabs.html'
})
export class FinancialPerformanceTabsPage {

  tab1Root = NOIPage;
  tab2Root = RevenuePage;
  tab3Root = ExpensePage;
  tab4Root = ARPage;

  propertyId: number;
  financialYear: number;
  financialPerformance: FinancialPerformance;
  tab2Params = { id: 1 };
  
  constructor(public navCtrl: NavController, 
    private navParams: NavParams,
    private loadingCtrl:LoadingController,
    private events: Events,
    private fpService: FinancialPerformanceService) {
      this.propertyId = navParams.data;
  }

  ionViewDidLoad(){
   
  }

  onChange() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.fpService.getFinancialPerformance(this.propertyId, this.financialYear, 'George Jin @Dallas')
    .subscribe(x=> {
      this.financialPerformance = x;
      console.log(x);
      this.events.publish("financialPerformance",this.financialPerformance);
      loading.dismiss();
    });
  }
}
