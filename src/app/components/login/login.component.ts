import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import{FlashMessagesService} from 'angular2-flash-messages';
import{Router, ActivatedRoute, Params} from '@angular/router';
import{Client} from '../../models/Clients';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(
    private authService:AuthService,
    private router:Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err.message);
        this.router.navigate(['/login']);
      })
  }
}
