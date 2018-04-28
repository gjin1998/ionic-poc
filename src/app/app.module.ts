import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';

import { MyApp } from './app.component';

import { PropertiesPage } from '../pages/about/properties';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PropertyService } from './services/property.service';
import { HttpClientModule } from '@angular/common/http';
import { PropertyInfoPage } from './property/propertyInfo';
import { FinancialPerformanceTabsPage } from '../pages/financialPerformanceTabs/financialPerformanceTabs';
import { NOIPage } from '../pages/financialPerformanceTabs/noi/noi';
import { RevenuePage } from '../pages/financialPerformanceTabs/revenue/revenue';
import { ExpensePage } from '../pages/financialPerformanceTabs/expense/expense';
import { ARPage } from '../pages/financialPerformanceTabs/ar/ar';
import { BaseService } from './services/base.service';
import { FinancialPerformanceService } from './services/financialPerformance.service';

@NgModule({
  declarations: [
    MyApp,
    PropertiesPage,
    ContactPage,
    HomePage,
    TabsPage,
    PropertyInfoPage,
    FinancialPerformanceTabsPage,
    NOIPage,
    RevenuePage,
    ExpensePage,
    ARPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PropertiesPage,
    ContactPage,
    HomePage,
    TabsPage,
    PropertyInfoPage,
    FinancialPerformanceTabsPage,
    NOIPage,
    RevenuePage,
    ExpensePage,
    ARPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseService,
    FinancialPerformanceService,
    PropertyService,
    MSAdal
  ]
})
export class AppModule {}
