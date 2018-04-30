import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';
import { AgmCoreModule } from '@agm/core';
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
import { GeoService } from './services/geo.service';
import { MapPage } from '../pages/googleMap/map';

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
    ARPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCm57su8DrMy6jIpgC57NQnF2moExVOwhc'
    })
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
    ARPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseService,
    FinancialPerformanceService,
    PropertyService,
    MSAdal,
    GeoService
  ]
})
export class AppModule {}
