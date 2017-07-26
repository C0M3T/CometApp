import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MachinePage } from '../pages/machine/machine';
import { ReservePage } from '../pages/reserve/reserve';
import { TimePage } from '../pages/time/time';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
// import { ConnectivityProvider } from '../providers/connectivity/connectivity';
// import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
// import { LocationsProvider } from '../providers/locations/locations';
// import { MapPage } from '../pages/map/map';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MachinePage,
    ReservePage,
    TimePage,
    InfoPage,
    TabsPage,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MachinePage,
    ReservePage,
    TimePage,
    InfoPage,
    TabsPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
  
})
export class AppModule {}
