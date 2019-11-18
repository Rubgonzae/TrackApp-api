import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.page.html',
  styleUrls: ['./list-devices.page.scss'],
})
export class ListDevicesPage implements OnInit {

  

  public devices = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    //this.getAllDevicesData();
  }

  ionViewDidEnter(){
    this.getAllDevicesData();
  }

  private getAllDevicesData(){
    this.apiService.getDevices().subscribe(response => {
      console.log(response);
      this.devices = response.devices;
    })
  }

  public editDevice(item: any){
    console.log('editDevice', item);
    this.apiService.getDevice().subscribe(response => {
      
    })
  }
  public removeDevice(item: any){
    this.apiService.delDevice(item._id).subscribe(response => {
      //console.log('removeDevice', item);
      this.getAllDevicesData();
    })
    
  }

  

}
