import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ContactPage} from '../contact/contact'
/**
 * Generated class for the ReservePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html',
})
export class ReservePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservePage');
  }
load(){
   	this.navCtrl.push(ContactPage, {
   		val:'anishnirmal'
   	})
   }
}
