import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-mapdevice',
  templateUrl: './mapdevice.page.html',
  styleUrls: ['./mapdevice.page.scss'],
})
export class MapdevicePage implements OnInit {

  public map: GoogleMap;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCxU7dBgCI1h3Gc7ilOqAIhxgliJnwFxQ4',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCxU7dBgCI1h3Gc7ilOqAIhxgliJnwFxQ4'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

  }


}
