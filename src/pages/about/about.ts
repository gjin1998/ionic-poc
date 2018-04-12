import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse } from '../../app/property/property.model';
import { PropertyService } from '../../app/services/property.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Content } from 'ionic-angular/components/content/content';
import { PropertyInfoPage } from '../../app/property/propertyInfo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public page= 0;
  public properties: PropertySearchResponse[]
  constructor(public navCtrl: NavController, 
    private service: PropertyService,
    private loadingCtrl:LoadingController) {
      
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.service.getProperties(0, 20, false).subscribe( x=>
      {
        this.properties = x.data; 
        loading.dismiss();
      }
    );
  }

  doInfinite(infiniteScroll) {
    this.page ++;
    console.log('Begin async operation');

    this.service.getProperties(this.page * 20,  20, false).subscribe( x=>
      {

        for (let i = 0; i < x.data.length; i++) {
          this.properties.push(x.data[i]);          
        }    
        infiniteScroll.complete();
        console.log('Async operation has ended');
      }
    );

    
     
  }

  onPropertyClicked($event, property){
    this.navCtrl.push(PropertyInfoPage, property);
  }

}
