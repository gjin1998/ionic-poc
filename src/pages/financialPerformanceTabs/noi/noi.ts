import { Component, Input } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { FinancialPerformance } from '../../../app/shared/models/financialPerformance.model';


@Component({
  selector: 'page-noi',
  templateUrl: 'noi.html'
})
export class NOIPage {
  
  public financialPerformance: FinancialPerformance;
  constructor(public navCtrl: NavController, private navParams: NavParams,private events: Events,) {
    this.events.subscribe("financialPerformance", (x) => this.financialPerformance = x);
  }

  onClick(){
    console.log("noi")
    console.log(this.financialPerformance);
  }
}
