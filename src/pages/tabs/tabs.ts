import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MachinePage } from '../machine/machine';
import { TimePage } from '../time/time';
import { ReservePage } from '../reserve/reserve';
import { InfoPage } from '../info/info';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab5Root = MachinePage;
  tab6Root = TimePage;
  tab7Root = ReservePage;
  tab8Root = InfoPage;

  
 




  constructor() {

  }
}