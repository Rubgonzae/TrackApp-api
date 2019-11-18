import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {

  public form: any = {
    name: '',
    serial: '',
    category: 0,
    description: '',
    status: true
  };

  constructor(
    public apiService: ApiService,
    public navController: NavController
    ) { }

  ngOnInit() {
  }

  private showDataForm(){
    
    const device = this.form;
    this.apiService.addDevice(device).subscribe(response => {
      console.log('form', this.form);
      this.navController.back();
    })
  }

}
