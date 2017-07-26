import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
load(){
   	this.navCtrl.push(InfoPage, {
   		val:'anishnirmal'
   	})
}
}

