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

  onLoginClicked($event){
    var authContext = new AuthenticationContext('https://login.windows.net/0159e9d0-09a0-4edf-96ba-a3deea363c28/oauth2/authorize');

authContext.acquireTokenAsync('https://graph.windows.net', '1dc93bca-05f3-40db-b4a0-b6352940c02d', 'http://mymobile')
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
/*
    let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common/oauth2/authorize');

    authContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://mymobile')
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
      }

}
