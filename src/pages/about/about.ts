import { Component, ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservePage} from '../reserve/reserve';
import { SettingsPage} from '../settings/settings';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { App, MenuController } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
options : GeolocationOptions;
currentPos : Geoposition;
places : Array<any> ; 
splash=true; 
@ViewChild('map') mapElement: ElementRef;
map: any;
  constructor(public navCtrl: NavController,private geolocation : Geolocation)  {
    this.places = [{name:"",vicinity:"",},{name:"",vicinity:""},{name:"",vicinity:""}]
  }
  
    ionViewDidLoad(){ 
     setTimeout(()=> {
      this.splash =false;
    },2000);
    this.getUserPosition();
}   
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    // let mapOptions = {
    // center: latLng,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    this.map = new google.maps.Map(this.mapElement.nativeElement);

    this.getLaundromats(latLng).then((results : Array<any>)=>{
        this.places = results;
        
        console.log(results)
        // for(let i = 0 ;i < results.length ; i++)
        // {
        //     this.createMarker(results[i]);
        // }
    },(status)=>console.log(status));

    // this.addMarker();

}
//   addMarker(){

//     let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//     });

//     let content = "<p>This is your current position !</p>";          
//     let infoWindow = new google.maps.InfoWindow({
//     content: content
//     });

//     google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//     });

// }
  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}

  itemSelected(item: any) {
   
    console.log("Selected Item", item.title.any);
    
    this.navCtrl.push(ReservePage, item)
  }
  
load1(){
   	this.navCtrl.push(SettingsPage, {
   		val:'anishnirmal'
   	})
}
  getLaundromats(latLng)
{
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
        location : latLng,
        radius : 3218 ,
        keyword: ["laundry"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                resolve(results);    
            }else
            {
                reject(status);
            }

        }); 
    });}
load(){
   	this.navCtrl.push(ReservePage, {
   		val:'anishnirmal'
   	})
}
//   createMarker(place)
// {
//     let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: place.geometry.location
//     });   
// }   
// }
}