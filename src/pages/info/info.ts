import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  machines: Observable<any>;

  // constructor(public navCtrl: NavController, public navParams: NavParams, public todoService:TodoServiceProvider) {
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadMachines() {
    // this.machines = this.todoService.getMachines();
  }
  addTodo() {
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
      //     {
      //       text: 'Save',
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
      // //  duration:3000
      // });
    //  toast.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
