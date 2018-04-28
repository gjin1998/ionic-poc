import { Component } from '@angular/core';

import { NOIPage } from './noi/noi';
import { RevenuePage } from './revenue/revenue';
import { ExpensePage } from './expense/expense';
import { ARPage } from './ar/ar';
import { FinancialPerformanceService } from '../../app/services/financialPerformance.service';

@Component({
  templateUrl: 'financialPerformanceTabs.html'
})
export class FinancialPerformanceTabsPage {

  tab1Root = NOIPage;
  tab2Root = RevenuePage;
  tab3Root = ExpensePage;
  tab4Root = ARPage;

  financialYear: number;
  constructor(private fpService: FinancialPerformanceService) {

  }

  ionViewDidLoad(){
   this.fpService.getFinancialPerformance(1, 4, 'George Jin @Dallas')
    .subscribe(x=> alert(x.totalActualRevenue));
  }

  onChange() {
    alert(this.financialYear);
  }
}
