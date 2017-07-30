import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { TimePage} from '../time/time';
import { Observable } from "rxjs/Observable";
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
  machines: Observable<any>;
  

  // constructor(public navCtrl: NavController, public navParams: NavParams, public todoService:TodoServiceProvider) {
  //   console.log(navParams.data)
  //   this.title = navParams.data.title;
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    console.log(navParams.data)
    this.title = navParams.data.title;
  }

  loadMachines() {
    // this.machines = this.todoService.getMachines();
  }
  addMachine() {
      // let prompt = this.alertCtrl.create({
      //   title: 'Dirty Clothes',
      //   message: "Clothes you have to wash now...",
      //   inputs: [
      //     {
      //       name: 'text',
      //       placeholder: 'Remember to delete clothes that are clean!'
      //     },
      //   ],
      //   buttons: [
      //     {
      //       text: 'Cancel'
      //     },
      //     {Save',
      //       text: '
      //       handler: data => {
      //         this.todoService.addMachine(data.text).subscribe(data => {
      //           this.showToast(data.msg);
      //           this.loadMachines();
      //         });
      //       }
      //     }
      //   ]
      // });
      // prompt.present();
    }
    removeMachine(id) {
      // this.todoService.deleteMachine(id).subscribe(data =>{
      //   this.loadMachines();
      //  duration:3000
      // });
    //  toast.present();
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
