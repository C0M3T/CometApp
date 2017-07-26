import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage} from '../about/about';
// import{MapPage } from '../map/map'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
tabBarElement: any;
  constructor(public navCtrl: NavController) {
    
  }
  load(){
   	this.navCtrl.push(AboutPage, {
   		val:'anishnirmal'
   	})
   }
//    load5(){
//    	this.navCtrl.push(MapPage, {
//    		val:'anishnirmal'
//    	})
//    }
}