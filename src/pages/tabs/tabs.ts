import { Component } from '@angular/core';

import { PropertiesPage } from '../about/properties';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PropertiesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
