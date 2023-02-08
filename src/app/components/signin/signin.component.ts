import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }
  user = {
    rut: '',
    password: ''
  }

  ngOnInit() {

  }

  signIn() {
    this.userService.signIn(this.user).subscribe( res => {
      localStorage.setItem('token', res.token), this.router.navigate(['/addressee'])
    }, err => console.log(err)
    )
  }
}
