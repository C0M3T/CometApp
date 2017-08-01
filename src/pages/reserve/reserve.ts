import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InfoPage} from '../info/info';
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
load88(){
   	this.navCtrl.push(InfoPage, {
   		val:'anishnirmal'
   	})
   }
}
