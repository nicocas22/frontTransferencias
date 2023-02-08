import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {
  constructor(
    private userService: UserService     ,
    ) {
  }
  ngOnInit() {
  
 
  }
  UserService = this.userService;
  
}
