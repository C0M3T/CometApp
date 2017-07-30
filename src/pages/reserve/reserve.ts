import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
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
   	this.navCtrl.push(SettingsPage, {
   		val:'anishnirmal'
   	})
   }
}
