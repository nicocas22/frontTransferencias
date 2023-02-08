import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from 'src/app/services/bank/bank.service';
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user = {
    email: '',
    password: '',
    rut: 0,
    name: '',
    lastName: '',
    bank: '',
    account: 0,
  }
  constructor(private userService: UserService
    ,
    private router: Router,
    private bankService: BankService) {

  }
  banks: any = []
  ngOnInit() {
    this.bankService.searchAllBank().subscribe(res  => {
      this.banks = res
    }, err => console.log(err))
  }

  signUp() {
    this.userService.signUp(this.user).subscribe(res => {
      localStorage.setItem('token', res.token), this.router.navigate(['/addressee']);
    }, err => console.log(err))
  }

}
