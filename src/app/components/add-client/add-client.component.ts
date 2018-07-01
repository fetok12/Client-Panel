import { Component, OnInit } from '@angular/core';
import{ Client } from '../../models/Clients';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {SettingsService} from '../../services/settings.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client = {
    firstName: '',
    lastName: '',
    email:'',
    phone:0,
    balance:''
  }
  disableBalanceOnAdd:boolean = true;
  constructor(
  private _flashMessagesService: FlashMessagesService,
  public router:Router,
  public clientService:ClientService,
  public settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.phone = 0;
    }
    if(!valid){
      this._flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout:4000});
      this.router.navigate(['add-client']);
    } else{
        // add new client
        this.clientService.newClient(value);
        this._flashMessagesService.show('New client added', {cssClass:'alert-success', timeout:4000});
        this.router.navigate(['/']);
    }
  }
}
