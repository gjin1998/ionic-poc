import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public error: string;
public token: string;
  constructor(public navCtrl: NavController, private msAdal: MSAdal) {

  }

  onLoginClicked($event){//https://login.windows.net/common
    //var authContext = new AuthenticationContext('https://login.windows.net/0159e9d0-09a0-4edf-96ba-a3deea363c28/oauth2/authorize');
   
   /*
    var authContext = new AuthenticationContext('https://login.windows.net/common');
    
authContext.acquireTokenSilentAsync('https://graph.windows.net', '1dc93bca-05f3-40db-b4a0-b6352940c02d')
  .then((authResponse: AuthenticationResult) => {
        console.log('Token is' , authResponse.accessToken);
        this.token = authResponse.accessToken;
        console.log('Token will expire on', authResponse.expiresOn);
      })
      .catch((e: any) => {
          console.log('Authentication failed', e);
          this.error = 'Authentication failed: ' +  e;
        }
      );
   */

    let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');
        
    authContext.acquireTokenAsync('https://graph.windows.net', 'eaa95d3e-cb7c-4af1-bb56-e11b3641ea9f', 'http://mymobile')
      .then((authResponse: AuthenticationResult) => {
        console.log('Token is' , authResponse.accessToken);
        this.token = authResponse.accessToken;
        console.log('Token will expire on', authResponse.expiresOn);
      })
      .catch((e: any) => {
          console.log('Authentication failed', e);
          this.error = 'Authentication failed: ' +  e;
        }
      );
       
      }

}
