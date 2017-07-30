import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage} from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import{ ContactPage} from '../pages/contact/contact';
import { MenuController } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = AboutPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  load8(){
      this.nav.push(InfoPage, {
        val:'anishnirmal'
      });
      this.menuCtrl.close();
  }
  load9(){
      this.nav.push(ContactPage, {
        val:'anishnirmal'
      });
      this.menuCtrl.close();
  }
}