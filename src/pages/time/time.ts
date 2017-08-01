import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MachinePage} from '../machine/machine';
/**
 * Generated class for the TimePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
  
})

export class TimePage { 
  splash=true; 
  slides = [
    {
      image: "../../assets/img/bluewasher.png"    
    },
    {  
      image: "../../assets/img/bluewasher.png",
    },
    {
      image: "../../assets/img/bluewasher.png",
    }
  ];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     setTimeout(()=> {
      this.splash =false;
    },2000);
    console.log('ionViewDidLoad TimePage');
  }
load(){
   	this.navCtrl.push(MachinePage, {
   		val:'anishnirmal'
   	})
   }
}
