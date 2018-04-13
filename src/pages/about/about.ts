import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropertySearchPagingData, PropertySearchResponse, PropertyVM } from '../../app/property/property.model';
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
  public properties: PropertyVM[];
  public queryText:string;
  constructor(public navCtrl: NavController, 
    private service: PropertyService,
    private loadingCtrl:LoadingController) {
      
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.service.getPropertiesChunk(0, 20).subscribe( x=>
      {
        this.properties = x; 
        loading.dismiss();
      }
    );
  }

  doInfinite(infiniteScroll) {
    this.page ++;
    console.log('Begin async operation');

    this.service.getPropertiesChunk(this.page * 20,  20).subscribe( x=>
      {

        for (let i = 0; i < x.length; i++) {
          this.properties.push(x[i]);          
        }    
        infiniteScroll.complete();
        console.log('Async operation has ended');
      }
    );
     
  }

  filterProperties(){
    if(this.queryText===''){
      this.service.getPropertiesChunk(0, 20).subscribe( x=>{
          this.properties = x; 
        }
      );
    }
    this.service.filterProperties(this.queryText,0,  20).subscribe( x=>{
        this.properties = x;
      }
    );
  }
  onPropertyClicked($event, property){
    this.navCtrl.push(PropertyInfoPage, property);
  }

}
