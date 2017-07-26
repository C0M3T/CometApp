import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimePage} from '../time/time';
/**
 * Generated class for the MachinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-machine',
  templateUrl: 'machine.html',
})
export class MachinePage {
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data)
    this.title = navParams.data.title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
    
  }
load(){
   	this.navCtrl.push(TimePage, {
   		val:'anishnirmal'
   	})
   }
}
